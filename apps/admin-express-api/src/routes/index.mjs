import express from "express";

import authRoutes from "./auth.routes.mjs";
import userRoutes from "./user.routes.mjs";
import storeRoutes from "./store.routes.mjs";
import inventoryRoutes from "./inventory.routes.mjs";
import propertiesRoutes from "./properties.routes.mjs";

const router = express.Router({
  strict: true
});

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/stores", storeRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/properties", propertiesRoutes);

export default router;
