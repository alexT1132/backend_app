import { Router } from "express";
import { register, login, verifyToken, logout } from "../controllers/auth.controller.js";
import { authREquired } from "../middlewares/validateToken.js";

const router  = Router();

router.post("/register", authREquired, register);

router.post("/login", authREquired, login);

router.get("/verify", verifyToken);

router.post("/logout", logout);

export default router;