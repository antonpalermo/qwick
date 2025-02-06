import userServices from "../mongoose/user.services.mjs";

export async function createUser(request, response) {
  try {
    const body = request.body;
    const newUser = await userServices.createUser({ ...body });

    return response.status(201).json({
      success: true,
      data: newUser,
      message: "new user successfully created"
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      data: null,
      message: "internal server error: unable to create new user"
    });
  }
}

export default { createUser };
