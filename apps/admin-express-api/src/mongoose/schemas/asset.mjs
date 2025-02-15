import mongoose from "mongoose";

import Field from "./field.mjs";
import Store from "./store.mjs";

const assetSchema = new mongoose.Schema(
  {
    fields: {
      type: [Field]
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Store
    }
  },
  {
    timestamps: {
      createdAt: "dateCreated",
      updatedAt: "dateUpdated"
    },
    toJSON: {
      virtuals: true,
      transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

export default mongoose.model("assets", assetSchema);
