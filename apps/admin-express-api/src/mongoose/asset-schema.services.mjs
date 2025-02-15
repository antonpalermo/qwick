import AssetSchema from "./schemas/asset-schema.mjs";

async function createAssetSchema(implementation) {
  try {
    return await AssetSchema.create(implementation);
  } catch (error) {
    throw new BackendError("database", "unable to create default asset-schema");
  }
}

export default { createAssetSchema };
