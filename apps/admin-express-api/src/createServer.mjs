import debug from "debug";
import express from "express";

import cors from "cors";
import passport from "passport";
import cookieParser from "cookie-parser";
import expressSession from "express-session";

import rootRoutes from "./routes/index.mjs";

import "./strategies/magic-link.mjs";

const logger = debug("app:server");

export function createServer() {
  const app = express();

  const corsOptions = {
    origin: ["http://localhost:5173"],
    credentials: true
  };

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cors(corsOptions));
  app.use(cookieParser(process.env.SECRET_KEYID));
  app.use(
    expressSession({
      secret: process.env.SECRET_KEYID,
      saveUninitialized: false,
      resave: false,
      cookie: { maxAge: 1000 * 60 * 60 * 24 }
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/api", rootRoutes);

  logger("express middlewares loaded");

  return app;
}
