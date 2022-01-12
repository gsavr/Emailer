const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    /* requireLogin is function we are injecting so that when /api/stripe gets vcalled there is a reference yto it to be used eventually */
    //console.log(req.body);
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      source: req.body.id,
      description: "$5 credit for email surveys",
    });
    req.user.credits += 5;
    const user = await req.user.save(); //update user with credits

    res.send(user); //send updated credits back tp user
    //console.log(charge);
  });
};
