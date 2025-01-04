import express from "express";

import health from "./health.js";
import inventory from "./inventory.js";

const router = express.Router({ strict: true });

router.use("/health", health);
router.use("/inventory", inventory);

export default router;
