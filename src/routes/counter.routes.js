import { Router } from "express";
import { getCounters, crear } from "../controllers/counter.controller.js";

const router  = Router();

router.post("/contador", crear);

router.get("/contador", getCounters);


export default router;