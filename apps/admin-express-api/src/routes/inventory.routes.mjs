import express from "express";

const route = express.Router({
  strict: true
});

route.get("/item", (req, res) => {
  console.log("request: ", req.session);
  return res.status(200).json({ invetory: [] });
});

export default route;
