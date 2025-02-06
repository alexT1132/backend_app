import { Router } from "express";
import { crear, getClients } from "../controllers/clients.controller.js";

const router  = Router();

router.post("/clientes", crear);

router.get("/clientes", getClients);


export default router;