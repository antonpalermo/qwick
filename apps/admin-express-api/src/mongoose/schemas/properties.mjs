import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true
    },
    properties: {
      store: {
        default: {
          type: mongoose.Schema.Types.ObjectId,
        }
      },
      theme: {
        type: mongoose.Schema.Types.String
      }
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

const Properties = mongoose.model("properties", propertySchema);

export default Properties
