import mongoose from "mongoose";
import Account from "./accounts.mjs";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
      required: true
    },
    email: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
      index: true
    },
    verified: {
      type: mongoose.Schema.Types.Boolean,
      default: false
    },
    image: {
      type: mongoose.Schema.Types.String,
      required: true
    },
    accounts: {
      type: [Account]
    }
  },
  {
    timestamps: {
      createdAt: "dateCreated",
      updatedAt: "dateUpdated"
    },
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

const User = mongoose.model("users", UserSchema);

export default User;
