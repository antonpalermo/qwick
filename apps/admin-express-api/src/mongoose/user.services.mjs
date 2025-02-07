import User from "./schemas/user.mjs";

import BackendError from "../utils/errors.mjs";

export async function createUser(user) {
  try {
    const createdUser = await User.create(user);
    return createdUser;
  } catch (error) {
    throw new BackendError("database", "unable to create and insert " + user);
  }
}

export async function getUser(id) {
  try {
    return await User.findById(id).select([
      "_id",
      "name",
      "email",
      "image",
      "verified"
    ]);
  } catch (error) {
    throw new BackendError(
      "database",
      "unable to perform query at the moment " + id
    );
  }
}

/**
 * this function will perform upsert if no existing email
 * is found.
 * @param {email} email used to locate user data
 */
export async function getUserByEmail(email) {
  try {
    return await User.findOneAndUpdate(
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
  } catch (error) {
    throw new BackendError(
      "database",
      "unable to perform query at the moment " + email
    );
  }
}

export default { createUser, getUser, getUserByEmail };
