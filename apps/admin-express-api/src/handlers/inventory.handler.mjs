import inventoryServices from "../mongoose/inventory.services.mjs";

async function getInventory(request, response) {
  return response.status(200).json({
    success: true,
    data: null,
    message: ""
  });
}

async function createItem(request, response) {
  try {
    const body = await request.body;
    const result = await inventoryServices.createInventoryItem(body);

    return response.status(200).json({
      success: true,
      data: result,
      message: "successfully created inventory item"
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      data: null,
      message: "unable to create inventory item"
    });
  }
}

export default { getInventory, createItem };
