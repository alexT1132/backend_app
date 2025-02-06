import mongoose from "mongoose";

const counterSchema = new mongoose.Schema(
  {
    numero: {
      type: String,
      required: true,
    },
  }, { timestamps: true }
);

export default mongoose.model("Count", counterSchema);