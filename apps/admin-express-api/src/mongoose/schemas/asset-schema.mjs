import mongoose from "mongoose";

import Store from "./store.mjs";
import SchemaProperties from "./schema-properties.mjs";

const assetSchema = new mongoose.Schema(
  {
    schema: {
      type: [SchemaProperties],
      default: [
        { label: "Name", type: "string" },
        { label: "Quantity", type: "number" }
      ]
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
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

export default mongoose.model("asset-schema", assetSchema);
