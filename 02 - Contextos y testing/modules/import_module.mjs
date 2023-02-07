// Con export default
// import mostrarNombre from './export_module.mjs';

// Con named exports
import { mostrarNombre, mostrarNombreMayus, pi } from "./export_module.mjs";

// Mala idea, normalmente. Puede traer TODO.
// import * as modulo from "./export_module.mjs";

// ESTO NO, PORFA
// import modulo from './export_module.mjs';

mostrarNombre('Carlos');
mostrarNombreMayus('Carlos');
// modulo.mostrarNombre('Carlos');

console.log(pi);