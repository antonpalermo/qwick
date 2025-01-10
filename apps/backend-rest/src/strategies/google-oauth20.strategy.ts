import passport from "passport";
import { Strategy as Google0Auth20Strategy } from "passport-google-oauth20";
import { User, Account } from "backend-migrator";

import { db } from "../database";
import { Insertable } from "kysely";

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  console.log("deserializeUser", id);

  try {
    const result = await db
      .selectFrom("users")
      .select(["users.id"])
      .executeTakeFirst();

    done(null, { user: result?.id });
  } catch (error) {
    console.log(error);
    throw new Error("deserializeUser");
  }
});

type UserFields = Insertable<User>;
type AccountFields = Insertable<Account>;

async function createUser(user: UserFields) {
  try {
    const result = await db
      .insertInto("users")
      .values(user)
      .returning([
        "users.id",
        "users.name",
        "users.email",
        "users.image",
        "users.email_verified",
        "users.created",
        "users.updated"
      ])
      .executeTakeFirst();

    return result;
  } catch (error) {
    throw new Error("unable to create user");
  }
}

async function createAccount(account: AccountFields) {
  try {
    const result = await db
      .insertInto("accounts")
      .values(account)
      .returningAll()
      .executeTakeFirst();

    return result;
  } catch (error) {
    throw new Error("unable to create accounts");
  }
}

export default passport.use(
  new Google0Auth20Strategy(
    {
      clientID: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      callbackURL: "/api/auth/callback/google",
      state: true
    },
    async (accessToken, _, profile, done) => {
      try {
        if (!profile) {
          throw new Error("profile cannot be empty");
        }

        const user = await db
          .selectFrom("users")
          .select("users.id")
          .where("users.email", "=", profile._json.email!)
          .executeTakeFirst();

        console.log("selected user: ", user);

        if (!user) {
          const result = await db.transaction().execute(async tx => {
            const newUser: UserFields = {
              name: profile._json.name!,
              email: profile._json.email!,
              email_verified: profile._json.email_verified!,
              image: profile._json.picture!,
              updated: new Date()
            };

            const createUserResult = await createUser(newUser);

            if (createUserResult) {
              const newAccount: AccountFields = {
                userId: createUserResult.id,
                provider: profile.provider,
                account_id: profile.id,
                access_token: accessToken
              };

              await createAccount(newAccount);
            }

            return createUserResult;
          });
        }
        done(null, user?.id);
      } catch (error) {
        throw new Error("unable to create accounts");
      }
    }
  )
);
