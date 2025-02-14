import { Router } from "express";
import { crear, getClients, ObtenerUltimo, ObtenerCliente } from "../controllers/clients.controller.js";

const router  = Router();

router.post("/clientes", crear);

router.get("/clientes", getClients);

router.get("/ultimoTicket", ObtenerUltimo);

router.get("/clientes/:id", ObtenerCliente);

export default router;