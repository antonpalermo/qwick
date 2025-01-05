import express from "express";
import cookieParser from "cookie-parser";

import routes from "./routes";

const app = express();

app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(routes);

export default app;
