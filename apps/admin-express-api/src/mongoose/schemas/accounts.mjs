import mongoose from "mongoose";

/**
 * sub document of user model
 */
const AccountSchema = new mongoose.Schema(
  {
    type: {
      type: mongoose.Schema.Types.String
    },
    provider: {
      type: mongoose.Schema.Types.String,
      required: true
    },
    accessToken: {
      type: mongoose.Schema.Types.String
    },
    refreshToken: {
      type: mongoose.Schema.Types.String
    },
    scope: {
      type: mongoose.Schema.Types.String
    }
  },
  {
    _id: false,
    timestamps: {
      createdAt: "dateCreated",
      updatedAt: "dateUpdated"
    }
  }
);

export default AccountSchema;
