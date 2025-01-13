import express from "express";

import authRoutes from "./auth.route.mjs";
import userRoutes from "./user.route.mjs";
import inventoryRoutes from "./inventory.routes.mjs";

const router = express.Router({
  strict: true
});

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/inventory", inventoryRoutes);

export default router;
