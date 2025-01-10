import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ server: "ok" });
});

app.listen(8080, () => {
  console.log(`server listening on http://localhost:8080`);
});
