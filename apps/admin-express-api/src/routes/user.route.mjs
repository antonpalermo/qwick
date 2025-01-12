import express from "express";
import User from "../mongoose/schemas/user.mjs";

const router = express.Router({
  strict: true
});

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

export default router;
