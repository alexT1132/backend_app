import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    usuario: {
      type: String,
      required: true,
      unique: true
    },
    contraseña: {
      type: String,
      required: true,
    },
  },
);

export default mongoose.model("User", userSchema);