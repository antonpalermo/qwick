import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import passport from "passport";

import authRoute from "./routes/auth.route.mjs";
import userRoute from "./routes/user.route.mjs";

import "./strategies/magic-link.mjs";
import "./database.mjs";

const app = express();

const corsOptions = {
  origin: ["http://localhost:5731"],
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

app.use("/auth", authRoute);
app.use("/user", userRoute);

app.listen(8080, () => {
  console.log(`server listening on http://localhost:8080`);
});
