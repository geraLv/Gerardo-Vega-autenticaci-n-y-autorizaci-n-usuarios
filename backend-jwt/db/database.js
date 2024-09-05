import {createPool}  from "mysql2/promise"

const createMyPool = async (req, res)=>{
    const coso = createPool({
        host: "localhost",
        user: "root",
        password: "",
        database: "db_system"
    });
    return coso

};
const pool = await createMyPool()

export { pool }