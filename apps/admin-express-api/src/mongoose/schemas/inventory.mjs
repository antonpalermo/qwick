import mongoose from "mongoose";

import Field from "./field.mjs";
import Store from "./store.mjs";

const inventorySchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String
    },
    fields: [Field],
    quantity: {
      type: mongoose.Schema.Types.Number
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

const Inventory = mongoose.model("inventory", inventorySchema);

export default Inventory;
