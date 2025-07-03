import { Router } from "express";
import { crear, ObtenerCursos, deleteCurso, ObtenerCurso, ActualizarCurso } from "../controllers/cursos.controller.js";

const router = Router();

  router.post("/cursos", crear);

  router.get("/cursos/:id", ObtenerCurso);
  
  router.put("/cursos/:id", ActualizarCurso);
  
  router.delete("/cursos/:id", deleteCurso);

  router.get("/cursos", ObtenerCursos);

export default router;