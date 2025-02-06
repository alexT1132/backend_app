import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import AuthRoutes from "./routes/auth.routes.js";
import ClientsRoutes from "./routes/client.routes.js";
import CountRoutes from "./routes/counter.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", AuthRoutes);
app.use("/api", ClientsRoutes);
app.use("/api", CountRoutes);

export default app;