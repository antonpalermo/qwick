import passport from "passport";
import { Strategy as MagicLinkStrategy } from "passport-magic-link";

import Plunk from "@plunk/node";

import User from "../mongoose/schemas/user.mjs";
import Logger, { Namespace } from "../utils/logger.mjs";

const plunk = new Plunk.default(process.env.PLUNK_API_KEY);

passport.serializeUser((user, done) => {
  console.log("serializeUser", user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log("deserializeUser  ", id);
  done(null, id);
});

async function sendEmailRequest(user, token) {
  return new Promise((res, rej) => {
    const link = `${process.env.BACKEND_URL}/api/auth/login/email/verify?token=${token}`;

    try {
      plunk.emails.send({
        to: user.email,
        subject: "Qwick Sign In",
        body: link
      });

      Logger(Namespace.AUTH, "magic-link sent to " + user.email);

      res();
    } catch (error) {
      // return the error as reject response.
      rej(error);
    }
  });
}

async function createUserWithEmail(email) {
  try {
    const result = await User.findOneAndUpdate(
      {
        email,
        "accounts.type": "email"
      },
      {
        name: "",
        email,
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

    return { id: result.id };
  } catch (error) {
    throw new Error(error);
  }
}

async function verifyMagicLink(user) {
  return await createUserWithEmail(user.email);
}

export default passport.use(
  new MagicLinkStrategy(
    {
      secret: process.env.SECRET_KEYID,
      tokenField: "token",
      userFields: ["email"],
      verifyUserAfterToken: true
    },
    sendEmailRequest,
    verifyMagicLink
  )
);
