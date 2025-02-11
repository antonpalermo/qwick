import mongoose from "mongoose";

const fieldSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
      required: true
    },
    hint: {
      type: mongoose.Schema.Types.String,
      optional: true
    },
    type: {
      type: mongoose.Schema.Types.String
    },
    value: {
      type: mongoose.Schema.Types.Mixed
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

export default fieldSchema;
