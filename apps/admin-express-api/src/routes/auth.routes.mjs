import express from "express";
import passport from "passport";

import handler from "../handlers/auth.handler.mjs";
import isAuthorized from "../middlewares/autorized.mjs";

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
  handler.signInUsingMagicLink
);

router.get(
  "/login/email/verify",
  passport.authenticate("magiclink", {
    action: "acceptToken",
    failureRedirect,
    successReturnToOrRedirect: `${process.env.FRONTEND_URL}`
  })
);

router.get("/status", isAuthorized, handler.getAuthStatus);

export default router;
