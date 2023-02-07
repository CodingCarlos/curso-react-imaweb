import { getRandomElement } from './getRandom';

const ideas: string[] = ['trabajar', 'dormir', 'hacer una red social', 'grabar un podcast'];
const ideaAleatoria: string = getRandomElement(ideas);

const diasSeguidos: number[] = [1, 3, 5, 15, 30];
const diasAleatios: number = getRandomElement(diasSeguidos);

interface Persona {
    nombre: string;
}

interface Amigo extends Persona {
    hobbies: string[]
}
interface Famoso extends Persona {
    actividad: string
}

const paco: Persona = { nombre: 'Paco' };
const marina: Amigo = { nombre: 'Marina', hobbies: ['cantar'] };
const selena: Famoso = { nombre: 'Selena', actividad: 'Cantar' };

const gente: Persona[] = [
    paco,
    marina,
    { nombre: 'Felipe' },
    selena,
];
const alguien:Persona = getRandomElement(gente);


// class Obradeteatro<TipoAsistente> {
//     asistentes: Array<TipoAsistente>

//     constructor(asistentes: TipoAsistente[]) {
//         this.asistentes = asistentes;
//     }
// }

// new Obradeteatro(gente)


function opinar<T extends Persona>(persona: T): T {
    console.log(`Soy ${persona.nombre}, y me parece bien`);

    return persona;
}

console.log(`Voy a ${ideaAleatoria} durante ${diasAleatios} dias con ${alguien.nombre}`);
console.log(`¿Qué te parece, ${alguien.nombre}?`);

opinar(alguien);

console.log('¿Y qué opina Selena?')

const opinado:Famoso = opinar(selena);

// function lanzaError(): {
//     throw new Error('Mi Error esperado');
//     // throw 'EL ESTANDAR ME DA IGUAL';
// }

// try {
//     lanzaError();
// } catch (e) {
//     console.log(e.message)
// }
// // } catch (e) {
// //     if (e instanceof Error) {
// //         console.log(e.message)
// //     }
// // }

interface Persona {
    nombre: string;
}

interface Persona {
    dni: string;
}

const yo:Persona = {
    nombre: 'asd',
    dni: 'asd',
}
