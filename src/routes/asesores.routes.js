import { Router } from "express";
import { crear, ObtenerAsesores } from "../controllers/asesores.controller.js";

const router = Router();

  router.post("/asesores", crear);

  router.get("/asesores", ObtenerAsesores);

export default router;