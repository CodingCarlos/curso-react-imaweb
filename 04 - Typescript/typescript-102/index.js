"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRandom_1 = require("./getRandom");
const ideas = ['trabajar', 'dormir', 'hacer una red social', 'grabar un podcast'];
const ideaAleatoria = (0, getRandom_1.getRandomElement)(ideas);
const diasSeguidos = [1, 3, 5, 15, 30];
const diasAleatios = (0, getRandom_1.getRandomElement)(diasSeguidos);
const paco = { nombre: 'Paco' };
const marina = { nombre: 'Marina', hobbies: ['cantar'] };
const selena = { nombre: 'Selena', actividad: 'Cantar' };
const gente = [
    paco,
    marina,
    { nombre: 'Felipe' },
    selena,
];
const alguien = (0, getRandom_1.getRandomElement)(gente);
function opinar(persona) {
    console.log(`Soy ${persona.nombre}, y me parece bien`);
    return persona;
}
console.log(`Voy a ${ideaAleatoria} durante ${diasAleatios} dias con ${alguien.nombre}`);
console.log(`¿Qué te parece, ${alguien.nombre}?`);
opinar(alguien);
console.log('¿Y qué opina Selena?');
const opinado = opinar(selena);
function lanzaError() {
    // throw new Error('Mi Error esperado');
    throw 'EL ESTANDAR DE MIS HUEVOS';
}
try {
    lanzaError();
}
catch (e) {
    console.log(e);
}
