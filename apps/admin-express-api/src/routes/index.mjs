import express from "express";

import authRoutes from "./auth.routes.mjs";
import userRoutes from "./user.route.mjs";
import storeRoutes from "./store.routes.mjs";
import inventoryRoutes from "./inventory.routes.mjs";

const router = express.Router({
  strict: true
});

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/stores", storeRoutes);

export default router;
