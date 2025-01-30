import express from "express";
import User from "../mongoose/schemas/user.mjs";
import Properties from "../mongoose/schemas/properties.mjs";

import isAuthorized from "../middlewares/autorized.mjs";

const router = express.Router({
  strict: true
});

router.use(isAuthorized);

router.post("/create", async (req, res) => {
  const { name, email, image } = req.body;

  try {
    const result = await User.create({ name, email, image });

    console.log(result);
    return res.status(201).json("user created");
  } catch (error) {
    console.log(error);
  }
});

router.get("/properties", async (request, response) => {
  const user = request.user.id;
  try {
    const property = await Properties.findOne({ user });
    return response.status(200).json(property);
  } catch (error) {
    console.log(error);
  }
});

export default router;
