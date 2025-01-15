import express from "express";
import passport from "passport";

import Logger, { Namespace } from "../utils/logger.mjs";

const router = express.Router({
  strict: true
});

const failureRedirect = `${process.env.FRONTEND_URL}/auth/login`;

router.post(
  "/login/email",
  passport.authenticate("magiclink", {
    action: "requestToken",
    failureRedirect
  }),
  (req, res) => {
    Logger(Namespace.AUTH, `magic link sent to ${req.body.email}`);
    return res.status(200).json("email successfully sent");
  }
);

router.get(
  "/login/email/verify",
  passport.authenticate("magiclink", {
    action: "acceptToken",
    failureRedirect,
    successReturnToOrRedirect: `${process.env.FRONTEND_URL}`
  }),
  (req, res) => {
    Logger(Namespace.AUTH, "email verified");
  }
);

export default router;
