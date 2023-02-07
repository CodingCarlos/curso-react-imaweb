import { traerDatos, config } from './export_module.mjs';

// import importado from './export_module.mjs';	// solo si quiero importar un objeto (de verdad)
// import * as importado from './export_module.mjs';

// const datos = traerDatos();
const datos = importado.traerDatos();
console.log(datos);

// console.log(config)
console.log(importado.config)
