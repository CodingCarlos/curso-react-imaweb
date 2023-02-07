// Un solo modulo por defecto
// const mostrarNombre = require('./export_requiere');

// Un objeto o varios modulos
// const modulo = require('./export_requiere');
const { mostrarNombre, mostrarNombreMayus } = require('./export_requiere');

// modulo.mostrarNombre('Carlos');
mostrarNombre('Carlos');
mostrarNombreMayus('Carlos');
