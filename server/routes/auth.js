const router = require("express").Router();
const passport = require("passport");

router.get("/login/success", (req, res) => {
  // until cookie is expired user always exist
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully Loged In",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }

  // if (req.user) {
  //   res.status(200).json({
  //     success: true,
  //     message: "successfully",
  //     user: req.user,
  //     //   cookies: req.cookies
  //     // or send jwt
  //   });
  // }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: false,
    message: "failure",
  });
});

// Google
router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/auth/login/failed",
  })
);

// Github
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/auth/login/failed",
  })
);

// Facebook
// https://developers.facebook.com/docs/facebook-login/permissions/overview
// YOU MUST SETUP YOUR OWN DOMAIN FOR USING THIS FEATURE
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["user_friends", "manage_pages"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/auth/login/failed",
  })
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

module.exports = router;
