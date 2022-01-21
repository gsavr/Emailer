const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url"); //built in to express - used to take out URL in the webhook
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({
      _user: req.user.id,
    }).select({ recipients: false }); //could also be ("-recipients") - leaves out reipients

    res.send(surveys);
  });

  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.redirect("/surveys/thankyou"); //link here and on App.js
  });

  app.post("/api/surveys/webhooks", (req, res) => {
    //console.log(req.body);
    const p = new Path("/api/surveys/:surveyId/:choice");

    /* const events =  */ _.chain(req.body)
      .map((event) => {
        const match = p.test(new URL(event.url).pathname); //p.test will return null if not survey id and no choice
        if (match) {
          return {
            email: event.email,
            surveyId: match.surveyId,
            choice: match.choice,
          };
        }
      })
      .compact() // get rid of null items
      .uniqBy("email", "surveyId")
      //this is what updates mongodB
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: {
                email: email,
                responded: false,
              },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date(),
          }
        ).exec();
      }) //this is what updates mongodB
      .value();

    /* console.log(events); */

    res.send({});
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map((email) => ({
        email: email.trim(),
      })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    //Great pleace to send an email
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
