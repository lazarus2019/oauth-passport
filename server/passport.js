const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// https://console.cloud.google.com/apis/credentials/oauthclient/
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback", // Set in Authorized redirect URIs
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);

      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //     return done(err, user);
      //   });

      // Example for using mongooseDB
      //   const user = {
      //       username: profile.displayName,
      //       avatar: profile.photos[0]
      //   }

      //   user.save()
    }
  )
);
