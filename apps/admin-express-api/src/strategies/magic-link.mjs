import passport from "passport";
import { Strategy as MagicLinkStrategy } from "passport-magic-link";

import Plunk from "@plunk/node";

import User from "../mongoose/schemas/user.mjs";
import Logger, { Namespace } from "../utils/logger.mjs";

const plunk = new Plunk.default(process.env.PLUNK_API_KEY);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  done(null, id);
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
      try {
        const result = await User.findOneAndUpdate(
          {
            email: user.email,
            "accounts.type": "email"
          },
          {
            name: "",
            email: user.email,
            image: "",
            verified: true,
            accounts: [
              {
                type: "email",
                provider: "magiclink",
                accessToken: null,
                refreshToken: null,
                scope: null
              }
            ]
          },
          {
            upsert: true,
            new: true
          }
        );

        Logger(Namespace.AUTH, `user ${user.email} verified and upserted`);

        return { id: result._id.toString() };
      } catch (error) {
        Logger(Namespace.AUTH, `unable verify and upsert user ${user.email}`);
        throw error;
      }
    }
  )
);
