import Asset from "./schemas/asset.mjs";
import BackendError from "../utils/errors.mjs";

async function createAsset(details) {
  try {
    return await Asset.create(details);
  } catch (error) {
    throw new BackendError("database", "unable to create new asset entry");
  }
}

export default { createAsset };
