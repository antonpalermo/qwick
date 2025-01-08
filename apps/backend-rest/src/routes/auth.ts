import { Router } from "express";
import passport from "passport";

const router = Router({
  strict: true
});

router.get("/status", async (req, res) => {
  req.session.user = "123";
  return res.status(200).json({ status: "ok" });
});

router.get(
  "/signin/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/callback/google",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    console.log("callback fired");
    return res.status(200).json({ status: "ok" });
  }
);

export default router;
