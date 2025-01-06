import express from "express";

import auth from "./auth";
import health from "./health";
import inventory from "./inventory";

const router = express.Router({ strict: true });

router.use("/auth", auth);
router.use("/health", health);
router.use("/inventory", inventory);

export default router;
