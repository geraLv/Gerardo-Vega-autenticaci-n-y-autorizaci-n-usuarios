import { Router } from "express";

import {
  cerrar_sesion,
  dato_sesion,
  inicio_sesion,
  register,
} from "../controllers/controllers.js";

const ruter = Router();

ruter.post("/login", inicio_sesion);
ruter.get("/session", dato_sesion);
ruter.post("/logout", cerrar_sesion);
ruter.post("/register", register);

export { ruter };
