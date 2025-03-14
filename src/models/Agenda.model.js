import mongoose from "mongoose";

const agendaSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    hora: {
        type: String,
        required: true
      },
      fecha: {
        type: String,
        required: true
      },
  }, { timestamps: true }
);

export default mongoose.model("Agenda", agendaSchema);