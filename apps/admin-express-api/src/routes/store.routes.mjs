import express from "express";

import handler from "../handlers/store.handler.mjs";
import isAuthorized from "../middlewares/autorized.mjs";

const routes = express.Router({
  strict: true
});

routes.use(isAuthorized);

routes.get("/", handler.getStores);

routes.post("/create", handler.createStore);

export default routes;
