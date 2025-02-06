import Properties from "./schemas/properties.mjs";

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

export default { getAllProperties, updateProperties };
