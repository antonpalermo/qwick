import express from "express";
import passport from "passport";

const router = express.Router({
  strict: true
});

router.post(
  "/login/email",
  passport.authenticate("magiclink", {
    action: "requestToken",
    failureRedirect: "/login"
  }),
  (req, res) => {
    return res.status(200).json("email successfully sent");
  }
);

router.get(
  "/login/email/verify",
  passport.authenticate("magiclink", { action: "acceptToken" }),
  (req, res) => {
    return res.redirect("/");
  }
);

export default router;
