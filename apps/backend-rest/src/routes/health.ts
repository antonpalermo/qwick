import { Router } from "express";

const router = Router({
  strict: true
});

router.get("/", (req, res) => {
  const uptime = process.uptime();
  const uptimeString = `${Math.floor(uptime / 60)}m ${Math.floor(uptime % 60)}s`;

  return res
    .status(200)
    .json({ status: "ok", uptime: uptimeString, isAlive: true });
});

export default router;
