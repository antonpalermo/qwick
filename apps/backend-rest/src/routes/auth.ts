import { Router } from "express";

const router = Router({
  strict: true
});

router.get("/status", async (req, res) => {
  req.session.user = "123";
  return res.status(200).json({ status: "ok" });
});

export default router;
