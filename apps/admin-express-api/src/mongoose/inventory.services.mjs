import Inventory from "./schemas/inventory.mjs";
import BackendError from "../utils/errors.mjs";

async function createInventoryItem(data) {
  try {
    return await Inventory.create(data);
  } catch (error) {
    throw new BackendError("database", "unable to create new inventory item");
  }
}

export default { createInventoryItem };
