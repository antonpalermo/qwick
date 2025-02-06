async function signInUsingMagicLink(request, response) {
  return response.status(200).json({
    success: true,
    data: null,
    message: "email successfully sent"
  });
}

async function getAuthStatus(request, response) {
  return response.status(200).json({
    success: true,
    data: request.user,
    message: "user details successfully fetched"
  });
}

export default { signInUsingMagicLink, getAuthStatus };
