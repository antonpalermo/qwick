import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

import routes from "./routes";

const app = express();

app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    resave: false,
    secret: process.env.SESSION_SECRET!,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);

app.use("/api", routes);

export default app;
