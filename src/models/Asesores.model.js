import mongoose from "mongoose";

const asesoresSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
    },
    telefono: {
        type: String,
        required: true,
      },
      direccion: {
        type: String,
        required: true,
      },
      municipio: {
        type: String,
        required: true,
      },
      rfc: {
        type: String,
        required: true,
      },
      nacionalidad: {
        type: String,
        required: true,
      },
      genero: {
        type: String,
        required: true,
      },
      area: {
        type: String,
        required: true,
      }
  },
);

export default mongoose.model("Asesores", asesoresSchema);