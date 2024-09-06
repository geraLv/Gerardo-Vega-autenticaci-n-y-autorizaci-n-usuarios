import { createPool } from "mysql2/promise";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "../settings/env.js";
const createMyPool = (async) => {
  try {
    const pool = createPool({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      port: DB_PORT,
    });

    return pool;
  } catch (error) {
    console.log("Hubo un error al conectar con la base de datos");
  }
};
const conn = createMyPool();

export { conn };
