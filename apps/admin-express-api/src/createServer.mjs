import debug from "debug";
import express from "express";

import cors from "cors";
import passport from "passport";
import cookieParser from "cookie-parser";
import expressSession from "express-session";

import rootRoutes from "./routes/index.mjs";

import mongoose from "mongoose";
import ConnectMongo from "connect-mongo";

import "./strategies/magic-link.mjs";

const logger = debug("app:server");

export function createServer() {
  const app = express();

  const corsOptions = {
    origin: [process.env.FRONTEND_URL],
    credentials: true
  };

  app.set("trust proxy", true);
  app.disable("x-powered-by");

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cors(corsOptions));
  app.use(cookieParser());
  app.use(
    expressSession({
      name: "sid",
      resave: false,
      saveUninitialized: false,
      secret: process.env.SECRET_KEYID,
      cookie: {
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24
      },
      store: ConnectMongo.create({
        client: mongoose.connection.getClient()
      })
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/api", rootRoutes);

  logger("express middlewares loaded");

  return app;
}
