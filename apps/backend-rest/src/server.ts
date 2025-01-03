import express from "express";

import healthRotue from "./routes/health";
import inventoryRoute from "./routes/inventory";

const app = express();

app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/health", healthRotue);
app.use("/inventory", inventoryRoute);

export default app;
