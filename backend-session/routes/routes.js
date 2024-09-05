import  pkg  from "express"
const rutas = pkg()

import {
    cerrar_sesion,
    dato_sesion,
    inicio_sesion,
    registro
} from "../controllers/controllers.js"

rutas.post('/login', inicio_sesion)
rutas.get('/session', dato_sesion) 
rutas.post('/logout', cerrar_sesion)
rutas.post('/register', registro)
export { rutas }