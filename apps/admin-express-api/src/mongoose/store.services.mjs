import mongoose from "mongoose";

import Store from "./schemas/store.mjs";
import Properties from "./schemas/properties.mjs";

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
    const stores = await Properties.aggregate([
      {
        $match: {
          user: new mongoose.Types.ObjectId(`${ownerid}`)
        }
      },
      {
        $lookup: {
          from: "stores",
          localField: "user",
          foreignField: "owner",
          as: "stores"
        }
      },
      {
        $project: {
          _id: false,
          id: "$_id",
          default: "$properties.store.default",
          stores: {
            $map: {
              input: "$stores",
              as: "store",
              in: {
                id: "$$store._id",
                name: "$$store.name",
                owner: "$$store.owner",
                dateCreated: "$$store.dateCreated",
                dateUpdated: "$$store.dateUpdated"
              }
            }
          }
        }
      }
    ]);
    return stores;
  } catch (error) {
    Logger(Namespace.DATABASE, "unable to get all available stores");
    throw new Error(error);
  }
}

export default { createStore, getStores };
