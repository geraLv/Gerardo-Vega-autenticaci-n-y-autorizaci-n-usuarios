// server.js
import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";

import { PORT } from "../backend-jwt/config/env.js";
import generarJwt from "../backend-jwt/helpers/generar-jwt.js";
import validarJwt from "../backend-jwt/middlewares/validar-jwt.js";
import { conn } from "../backend-jwt/db/database.js";
import morgan from "morgan";
import { ruter } from "./routes/routes.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "session_secret_key", // Cambia esto por una clave secreta en producción
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Usar 'true' si usas HTTPS
  })
);
app.use(ruter);
// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
