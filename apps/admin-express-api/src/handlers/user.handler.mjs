import User from "../mongoose/schemas/user.mjs";
import logger, { Namespace } from "../utils/logger.mjs";

export async function createUser(usr) {
  try {
    const result = new User({
      ...usr
    });

    return await result.save();
  } catch (error) {
    logger(Namespace.API, "error unable to create new user model");
  }
}
