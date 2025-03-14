import { Router } from "express";
import { crear, getAgenda } from "../controllers/agenda.controller.js";

const router  = Router();

router.post("/agenda", crear);

router.get("/agenda", getAgenda);

export default router;