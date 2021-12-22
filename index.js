const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User"); //use the user first before calling on passport which calls on user
require("./services/passport"); //since we are not exporting any one function in particular but the whole file
//const authRoutes = require("./routes/authRoutes"); MODIFIED in (app)

mongoose.connect(keys.mongoURI);

const app = express();

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

const PORT = process.env.PORT || 5001;
app.listen(PORT);
