import passport from "passport";
import { Strategy as MagicLinkStrategy } from "passport-magic-link";

import Plunk from "@plunk/node";

import userServices from "../mongoose/user.services.mjs";
import propertiesServices from "../mongoose/properties.services.mjs";

import Logger, { Namespace } from "../utils/logger.mjs";

const plunk = new Plunk.default(process.env.PLUNK_API_KEY);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userServices.getUser(id);
  done(null, user);
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
    // upsert a new user if the email provided does not exist.
    const user = await userServices.getUserByEmail(email);
    // then create a default set of properties for a user
    await propertiesServices.createProperties(user.id);

    return { id: user.id };
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
