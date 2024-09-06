import { conn } from "../db/database.js";
// Ruta para manejar el inicio de sesión
export const inicio_sesion = async (req, res) => {
  const { username, password } = req.body;
  // Buscar usuario
  const [[user]] = await conn.query(
    "SELECT * FROM user WHERE username = ? and password = ?",
    [username, password]
  );

  if (user) {
    // Guardar información del usuario en la sesión
    req.session.userId = user.id;
    req.session.username = user.username;

    return res.json({
      message: "Inicio de sesión exitoso",
      user: { id: user.id, username: user.username },
    });
  } else {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }
};

export const register = async (req, res) => {
  const { username, password } = req.body;
  const consulta = await conn.query(
    `INSERT INTO user (username, password) VALUES(?,?)`,
    [username, password]
  );
  res.send("Se registro correctamente");
};

// Ruta para obtener los datos de la sesión
export const dato_sesion = (req, res) => {
  console.log(req.session);
  if (req.session.userId) {
    return res.json({
      loggedIn: true,
      user: { id: req.session.userId, username: req.session.username },
    });
  } else {
    return res
      .status(401)
      .json({ loggedIn: false, message: "No hay sesión activa" });
  }
};

// Ruta para cerrar la sesión
export const cerrar_sesion = (req, res) => {
  console.log(req.session);
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Error al cerrar la sesión" });
    }
    res.clearCookie("connect.sid"); // Nombre de cookie por defecto para express-session
    return res.json({ message: "Sesión cerrada exitosamente" });
  });
};
