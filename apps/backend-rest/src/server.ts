import express from "express";

import healthRotuer from "./routes/health";

const app = express();

app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/health", healthRotuer);

export default app;
