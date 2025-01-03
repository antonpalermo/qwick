import e, { Router } from "express";
import { db } from "../database";

const router = Router({
  strict: true
});

router.get("/", async (req, res) => {
  try {
    const inventory = await db.selectFrom("inventory").selectAll().execute();

    return res.status(200).json({ success: true, data: inventory });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/add", async (req, res) => {
  try {
    await db
      .insertInto("inventory")
      .values({ id: "2", createdDate: new Date(), updatedDate: new Date() })
      .execute();

    return res
      .status(201)
      .json({ success: true, message: "Added to inventory", data: null });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
