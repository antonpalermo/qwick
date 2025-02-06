import express from "express";

import handler from "../handlers/user.handler.mjs";
import isAuthorized from "../middlewares/autorized.mjs";

const router = express.Router({
  strict: true
});

router.use(isAuthorized);

router.post("/create", handler.createUser);

export default router;
