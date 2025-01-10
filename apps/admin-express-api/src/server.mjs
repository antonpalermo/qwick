import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import passport from "passport";

const app = express();

const corsOptions = {
  origin: ["http://localhost:5731"],
  credentials: true
};

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

app.listen(8080, () => {
  console.log(`server listening on http://localhost:8080`);
});
