export default function isAuthorized(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      success: false,
      message: "unauthorized to access this resource"
    });
  }

  return next();
}
