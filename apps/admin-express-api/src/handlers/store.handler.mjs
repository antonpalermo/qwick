import storeServices from "../mongoose/store.services.mjs";
import propertiesService from "../mongoose/properties.services.mjs";

async function getStores(request, response) {
  try {
    const id = request.user.id;
    const stores = await storeServices.getStores(id);

    return response.status(200).json({
      success: true,
      data: stores[0],
      message: `all stores successfully fetched`
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      data: null,
      message: `Unable to fetch all stores`
    });
  }
}

async function createStore(request, response) {
  try {
    const data = request.body;
    const user = request.user.id;

    const store = await storeServices.createStore({
      name: data.name,
      owner: user
    });

    // set the default store id once created.
    await propertiesService.updateProperties(user, {
      store: {
        default: store.id
      }
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
      message: `Unable to create store`
    });
  }
}

export default { getStores, createStore };
