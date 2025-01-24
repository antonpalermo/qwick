import express from "express";
import isAuthorized from "../middlewares/autorized.mjs";

const router = express.Router({
  strict: true
});

// router.use(isAuthorized);

router.get("/item", (req, res) => {
  return res.status(200).json({ invetory: [] });
});

export default router;
