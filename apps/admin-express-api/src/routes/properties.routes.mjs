import express from "express";
import Properties from "../mongoose/schemas/properties.mjs";
import PropertiesServices from "../mongoose/properties.services.mjs";

import isAuthorized from "../middlewares/autorized.mjs";

const router = express.Router({
  strict: true
});

router.use(isAuthorized);

router.get("/", async (request, response) => {
  const user = request.user.id;
  try {
    const property = await PropertiesServices.getUserProperties(user);

    return response.status(200).json({
      success: true,
      data: property,
      message: "successfully fetched all properties"
    });
  } catch (error) {
    console.log(error);
  }
});

router.put("/update", async (request, response) => {
  const user = request.user.id;
  const properties = request.body;

  try {
    const updatedProperties = await PropertiesServices.updateUserProperties(
      user,
      properties
    );

    return response.status(200).json({
      success: true,
      data: updatedProperties,
      message: "user properties successfully updated"
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
