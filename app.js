const { argv } = require("./config/yargs");
const { crearTabla, listar } = require("./helpers/multiplicar");

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;
// console.log(argv);

// ASI SE EJECUTA CON PROMESAS
switch (comando) {
  case "listar":
    listar(base, limite);
    break;
  case "crear":
    crearTabla(base, limite)
      .then((response) => console.log(response, "creado"))
      .catch((err) => console.log(err));

    break;

  default:
    console.log("comando no reconocido");
    break;
}
