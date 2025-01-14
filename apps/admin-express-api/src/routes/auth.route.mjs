import express from "express";
import passport from "passport";

import Logger, { Namespace } from "../utils/logger.mjs";

const router = express.Router({
  strict: true
});

router.post(
  "/login/email",
  passport.authenticate("magiclink", {
    action: "requestToken",
    failureRedirect: "http://localhost:5173/auth/signin"
  }),
  (req, res) => {
    Logger(Namespace.AUTH, `magic link sent to ${req.body.email}`);
    return res.status(200).json("email successfully sent");
  }
);

router.get(
  "/login/email/verify",
  passport.authenticate("magiclink", { action: "acceptToken" }),
  (req, res) => {
    return res.redirect("http://localhost:5173/");
  }
);

export default router;
