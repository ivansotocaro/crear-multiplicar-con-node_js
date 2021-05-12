const fs = require("fs");

const listar = (base, limite = 10) => {
  console.log("===========================");
  console.log(`La table de ${base} con limite ${limite} es:`);
  console.log("===========================");

  let tabla = "";

  for (let i = 1; i <= limite; i++) {
    tabla += `${base} x ${i} = ${base * i}\n`;
  }
  console.log(tabla.trim());
};

// REALIZADO CON PROMESAS
const crearTabla = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (typeof base == "number" && base !== 0) {
      console.log("===========================");
      console.log(`La table del ${base} es:`);
      console.log("===========================");

      let salida = "";

      for (let i = 1; i <= limite; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
      }

      console.log(salida.trim());
      fs.writeFileSync(
        `./archivos/tabla-${base}-con-limite${limite}.txt`,
        salida
      );
      resolve(`El archivo tabla-${base}-con-limite${limite}.txt`);
    } else {
      reject("Error!, Se debe ingresar solo numero mayor y 0");
    }
  });
};

module.exports = { crearTabla, listar };
