import mongoose from "mongoose";

const userSchema = mongoose.Schema(
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
    }
  },
  {
    timestamps: {
      createdAt: "dateCreated",
      updatedAt: "dateUpdated"
    }
  }
);

const User = mongoose.model("users", userSchema);

export default User;
