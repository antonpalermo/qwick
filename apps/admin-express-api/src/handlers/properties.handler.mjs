import propertiesServices from "../mongoose/properties.services.mjs";

async function getUserProperties(request, response) {
  try {
    const user = request.user.id;
    const properties = await propertiesServices.getProperties(user);

    if (!properties) {
      return response.status(404).json({
        success: false,
        data: null,
        message: "unable to locate properties for " + user
      });
    }

    return response.status.json({
      success: true,
      data: properties,
      message: "successfully fetched all properties"
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      data: null,
      message: "Internal server error: unable to get all user properties"
    });
  }
}

async function updateUserProperties(request, response) {
  try {
    const user = request.user.id;
    const properties = request.body;

    const updatedProperties = await propertiesServices.updateProperties(
      user,
      properties
    );

    if (!updatedProperties) {
      return response.status(404).json({
        success: false,
        data: null,
        message: "unable to locate properties for " + user
      });
    }

    return response.status(200).json({
      success: true,
      data: updatedProperties,
      message: "user properties successfully updated"
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      data: null,
      message: "Internal server error: unable to get all user properties"
    });
  }
}

export default { getUserProperties, updateUserProperties };
