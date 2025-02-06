import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
    },
    direccion: {
      type: String,
    },
    asesoria: {
        type: String,
      },
      grupo: {
        type: String,
      },
      sesiones: {
        type: String,
      },
      horas: {
        type: String,
      },
      importe: {
        type: String,
      },
      anticipo: {
        type: String,
      },
      pendiente: {
        type: String,
      },
      fechaPendiente: {
        type: String,
      },
      incentivo: {
        type: String,
      },
      total: {
        type: String,
      },
  }, { timestamps: true }
);

export default mongoose.model("Client", clientSchema);