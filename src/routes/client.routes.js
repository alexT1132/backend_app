import { Router } from "express";
import { crear, getClients, ObtenerUltimo, ObtenerCliente, BorrarCliente, ObtenerVentasDelDia, ObtenerVentasSemanales, ObtenerVentasMes } from "../controllers/clients.controller.js";

const router  = Router();

router.post("/clientes", crear);

router.get("/clientes", getClients);

router.get("/ultimoTicket", ObtenerUltimo);

router.get("/clientes/:id", ObtenerCliente);

router.delete("/clientes/:id", BorrarCliente);

router.get("/clientesDia", ObtenerVentasDelDia);

router.get("/clientesSemana", ObtenerVentasSemanales);

router.get("/clientesMes", ObtenerVentasMes)

export default router;