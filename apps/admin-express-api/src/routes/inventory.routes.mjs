import express from "express";
import isAuthorized from "../middlewares/autorized.mjs";

import handler from "../handlers/inventory.handler.mjs";

const router = express.Router({
  strict: true
});

router.use(isAuthorized);

router.get("/", handler.getInventory);

router.post("/create", handler.createItem);

export default router;
