import mongoose from "mongoose";
import Store from "./store.mjs";

const Mapping = new mongoose.Schema({
  label: {
    type: mongoose.Schema.Types.String
  },
  type: {
    type: mongoose.Schema.Types.String
  }
});

const outlineSchame = new mongoose.Schema(
  {
    mappings: {
      type: [Mapping],
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

export default mongoose.model("outline", outlineSchame);
