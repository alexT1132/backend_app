import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true
    },
    costo: {
      type: Number,
      required: true,
    },
  },
);

export default mongoose.model("Curso", cursoSchema);