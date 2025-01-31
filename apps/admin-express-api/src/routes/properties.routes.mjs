import express from "express";
import Properties from "../mongoose/schemas/properties.mjs";

import isAuthorized from "../middlewares/autorized.mjs";

const router = express.Router({
  strict: true
});

router.use(isAuthorized);

router.get("/", async (request, response) => {
  const user = request.user.id;
  try {
    const property = await Properties.findOne({ user });
    return response.status(200).json(property);
  } catch (error) {
    console.log(error);
  }
});

router.put("/update", async (request, response) => {
  const user = request.user.id;
  const properties = request.body;

  try {
    const updatedProperties = await Properties.findOneAndUpdate(
      { user },
      { $set: properties },
      { new: true }
    );

    return response.status(200).json(updatedProperties);
  } catch (error) {
    console.log(error);
  }
});

export default router;
