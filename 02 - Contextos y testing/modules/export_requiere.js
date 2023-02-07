// function mostrarNombre(nombre) {
exports.mostrarNombre = function mostrarNombre(nombre) {
    console.log(`Hola buenas soy ${nombre}`);
}

// function mostrarNombreMayus(nombre) {
exports.mostrarNombreMayus = function mostrarNombreMayus(nombre) {
    console.log((`Hola buenas soy ${nombre}`).toUpperCase());
}

// Un solo modulo por defecto
// module.exports = mostrarNombre;

// Un objeto con varios metodos
// module.exports = {
//     mostrarNombre,
//     mostrarNombreMayus,
// }
