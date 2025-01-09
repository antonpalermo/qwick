import passport from "passport";
import { Strategy as Google0Auth20Strategy } from "passport-google-oauth20";

passport.serializeUser((id, done) => {
  done(null, id);
});

passport.deserializeUser((id, done) => {
  done(null, { user: null });
});

export default passport.use(
  new Google0Auth20Strategy(
    {
      clientID: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      callbackURL: "/api/auth/callback/google",
      state: true
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);
      console.log("profile", profile);

      return done(null, profile.id);
    }
  )
);
