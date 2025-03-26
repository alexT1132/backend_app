import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import cron from "node-cron";
import { fileURLToPath } from 'url';
import path from 'path';

import AuthRoutes from "./routes/auth.routes.js";
import ClientsRoutes from "./routes/client.routes.js";
import CountRoutes from "./routes/counter.routes.js";
import AgendaRoutes from "./routes/agenda.routes.js";
import AsesoresRoutes from "./routes/asesores.routes.js";

import { eliminarEventosPasados } from "./controllers/agenda.controller.js";

const app = express();


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

app.use("/api", AuthRoutes);
app.use("/api", ClientsRoutes);
app.use("/api", CountRoutes);
app.use("/api", AgendaRoutes);
app.use("/api", AsesoresRoutes);

// Automatizar eliminación cada 24 horas (a la medianoche)
cron.schedule("0 0 * * *", () => {
    console.log("Ejecutando limpieza automática de eventos...");
    eliminarEventosPasados();
  });
  
  // Ejecutar limpieza al iniciar el servidor
  eliminarEventosPasados();


export default app;