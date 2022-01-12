const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users"); // one argument means we're pulling info out

passport.serializeUser((user, done) => {
  done(null, user.id /* mongo _id */);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy( //has code that says it is identified as a string call "google"
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log("access token= ", accessToken);
      // console.log("refresh token= ", refreshToken);
      console.log("profile: ", profile);
      const existingUser = await User.findOne({ googleID: profile.id });

      if (existingUser) {
        //we already have record with given googleID
        return done(null, existingUser); //null - everything is fine, here is the user info
        // if we add 'return' to line above above we can remove the 'else {}' case while leaving the logic
      }
      //we don't have this on record, make new record
      const user = await new User({
        googleID: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
      }).save();
      done(null, user);
    }
  )
);
