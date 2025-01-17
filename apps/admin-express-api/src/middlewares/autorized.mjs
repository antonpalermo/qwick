export default function isAuthorized(req, res, next) {
  if (!req.isAuthenticated()) {
    switch (req.method) {
      case "GET":
        return res.redirect(`${process.env.FRONTEND_URL}/auth/signin`);
      default:
        return res.status(401).json({
          success: false,
          message: "unauthorized to access this resource"
        });
    }
  }

  return next();
}
