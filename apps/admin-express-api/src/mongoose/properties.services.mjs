import Properties from "./schemas/properties.mjs";
import BackendError from "../utils/errors.mjs";
import mongoose from "mongoose";

async function createProperties(uid) {
  try {
    return await Properties.create({
      user: new mongoose.Types.ObjectId(`${uid}`),
      properties: {
        store: {
          default: null
        },
        theme: "light"
      }
    });
  } catch (error) {
    throw new BackendError(
      "database",
      "unable to create user properties at the moment"
    );
  }
}

async function getAllProperties(uid) {
  try {
    const properties = await Properties.find({
      user: uid
    });
    return properties;
  } catch (error) {
    console.log(error);
  }
}

async function updateProperties(uid, properties) {
  try {
    const modifiedProperties = {};

    for (const [key, value] of Object.entries(properties)) {
      modifiedProperties[`properties.${key}`] = value;
    }

    const updatedProperties = await Properties.findOneAndUpdate(
      { user: uid },
      { $set: modifiedProperties },
      { upsert: true, new: true }
    );

    return updatedProperties;
  } catch (error) {
    console.log(error);
  }
}

export default { getAllProperties, updateProperties, createProperties };
