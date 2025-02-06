import express from "express";

import isAuthorized from "../middlewares/autorized.mjs";
import handler from "../handlers/properties.handler.mjs";

const router = express.Router({
  strict: true
});

router.use(isAuthorized);

router.get("/", handler.getUserProperties);

router.put("/update", handler.updateUserProperties);

export default router;
