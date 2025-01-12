import debug from "debug";
import mongoose from "mongoose";

const logger = debug("app:database");

export default mongoose
  .connect(process.env.DATABASE_URL)
  .then(e => logger("database connected"))
  .catch(e => {
    logger("unable to connect to database");
  });
