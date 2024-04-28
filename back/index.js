//! PASO 1:
const dbCon = require("./src/config/dbCon");
const server = require("./src/server");
require("dotenv").config();

dbCon().then(
  (res) => {

server.listen(process.env.PORT, ()=> {
console.log("Escuchando en el puerto 3000")});

  }
).catch((err)=> {
  console.log("Error al vincular la BDD")
});

//* Mongoose Paso 2.  Invocar a dbCon y si se conecta bien a la BDD, levantar el servidor. Sinó tirar un Error.
