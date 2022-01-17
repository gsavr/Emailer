const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User"); //get the user first before calling on passport which calls on user
require("./models/Survey");
require("./services/passport"); //since we are not exporting any one function in particular but the whole file
//const authRoutes = require("./routes/authRoutes"); MODIFIED in (app)

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 34 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

//authRoutes(app); modified to below
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //make sure that express will serv eup production asses like main.js / main.css
  app.use(express.static("client/build"));
  // Express will serve up index.html if it doesn't recognize the route -- React Router will take care of the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT);
