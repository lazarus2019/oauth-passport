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

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/auth/login/failed",
  })
);

module.exports = router;
