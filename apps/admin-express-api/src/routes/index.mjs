import express from "express";

import authRoutes from "./auth.route.mjs";
import userRoutes from "./user.route.mjs";

const router = express.Router({
  strict: true
});

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

export default router;
