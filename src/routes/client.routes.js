import { Router } from "express";
import { crear, getClients, ObtenerUltimo, ObtenerCliente, BorrarCliente } from "../controllers/clients.controller.js";

const router  = Router();

router.post("/clientes", crear);

router.get("/clientes", getClients);

router.get("/ultimoTicket", ObtenerUltimo);

router.get("/clientes/:id", ObtenerCliente);

router.delete("/clientes/:id", BorrarCliente);

export default router;