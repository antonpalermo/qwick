import Outline from "./schemas/outline.mjs";

import BackendError from "../utils/errors.mjs";

async function createOutline(implementation) {
  try {
    return await Outline.create(implementation);
  } catch (error) {
    throw new BackendError("database", "unable to create default outline");
  }
}

export default { createOutline };
