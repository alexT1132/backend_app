import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import cron from "node-cron";

import AuthRoutes from "./routes/auth.routes.js";
import ClientsRoutes from "./routes/client.routes.js";
import CountRoutes from "./routes/counter.routes.js";
import AgendaRoutes from "./routes/agenda.routes.js";

import { eliminarEventosPasados } from "./controllers/agenda.controller.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", AuthRoutes);
app.use("/api", ClientsRoutes);
app.use("/api", CountRoutes);
app.use("/api", AgendaRoutes);

// Automatizar eliminación cada 24 horas (a la medianoche)
cron.schedule("0 0 * * *", () => {
    console.log("⏳ Ejecutando limpieza automática de eventos...");
    eliminarEventosPasados();
  });
  
  // Ejecutar limpieza al iniciar el servidor
  eliminarEventosPasados();


export default app;