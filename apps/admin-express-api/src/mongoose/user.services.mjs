import User from "./schemas/user.mjs";

import Logger, { Namespace } from "../utils/logger.mjs";

export async function createUser(user) {
  try {
    const createdUser = await User.create(user);
    return createdUser;
  } catch (error) {
    Logger(Namespace.DATABASE, "unable to create store " + store.name);
    throw new Error(error);
  }
}

export default { createUser };
