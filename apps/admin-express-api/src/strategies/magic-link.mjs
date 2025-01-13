import passport from "passport";
import { Strategy as MagicLinkStrategy } from "passport-magic-link";

import Plunk from "@plunk/node";

const plunk = new Plunk.default(process.env.PLUNK_API_KEY);

passport.serializeUser((user, done) => {
  console.log("serializeUser: ", user);
  done(null, user);
});

passport.deserializeUser((id, done) => {
  console.log("deserializeUser: ", id);
  done(null, { user: id });
});

export default passport.use(
  new MagicLinkStrategy(
    {
      secret: process.env.SECRET_KEYID,
      tokenField: "token",
      userFields: ["email"],
      verifyUserAfterToken: true
    },
    async (user, token) => {
      const verificationLink = `http://localhost:8080/api/auth/login/email/verify?token=${token}`;

      return plunk.emails.send({
        to: user.email,
        subject: "Sign in to Custom App",
        body: verificationLink
      });
    },
    async user => {
      console.log("verify callback:", user);
      return { name: "Anton Palermo" };
    }
  )
);
