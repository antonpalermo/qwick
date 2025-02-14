import mongoose from "mongoose";

export default new mongoose.Schema(
  {
    label: {
      type: mongoose.Schema.Types.String
    },
    type: {
      type: mongoose.Schema.Types.String
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
