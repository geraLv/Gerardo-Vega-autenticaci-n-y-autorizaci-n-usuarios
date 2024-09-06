import { Router } from "express";
import {
  logout,
  session,
  register,
  login,
} from "../controllers/controllers.js";
import validarJwt from "../middlewares/validar-jwt.js";

const ruter = Router();

ruter.get("/session", validarJwt, session);
ruter.post("/logout", logout);
ruter.post("/register", register);
ruter.post("/login", login);

export { ruter };
