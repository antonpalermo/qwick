import express from "express";
import isAuthorized from "../middlewares/autorized.mjs";

import storeService from "../mongoose/store.services.mjs";

const routes = express.Router({
  strict: true
});

routes.use(isAuthorized);

routes.get("/", async (request, response) => {
  try {
    const id = request.user.id;
    const stores = await storeService.getStores(id);

    return response.status(201).json({
      success: true,
      data: stores,
      message: `all stores successfully fetched`
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      data: undefined,
      message: `Unable to fetch all stores`
    });
  }
});

routes.post("/create", async (request, response) => {
  try {
    const data = request.body;

    const store = await storeService.createStore({
      name: data.name,
      owner: request.user.id
    });

    return response.status(201).json({
      success: true,
      data: store,
      message: `${data.name} store successfully created`
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      data: undefined,
      message: `Unable to create ${data.name} store`
    });
  }
});

export default routes;
