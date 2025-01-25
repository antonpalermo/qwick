import Store from "./schemas/store.mjs";

import Logger, { Namespace } from "../utils/logger.mjs";

async function createStore(store) {
  try {
    const createdStore = await Store.create(store);
    return createdStore;
  } catch (error) {
    Logger(Namespace.DATABASE, "unable to create store " + store.name);
    throw new Error(error);
  }
}

async function getStores(ownerid) {
  try {
    const stores = await Store.find({ owner: ownerid });
    return stores;
  } catch (error) {
    Logger(Namespace.DATABASE, "unable to create store " + store.name);
    throw new Error(error);
  }
}

export default { createStore, getStores };
