export interface Usuario {
    readonly id: string,
    name: string;
    password: string;
    age?: number;
    hobbies?: string[];
}

const paco: Usuario = {
    id: 'user_007',
    name: 'Paco',
    password: '1234',
    age: 35,
    hobbies: ['lol', 'wow', 'surf'],
    // pelo: false,
};

export function getUsuario(): Usuario {
    return paco;
}

// export function newUsuario(nombre: string): Usuario | null {
    // if (!nombre) {
    //     return null;
    // }
export function newUsuario(nombre: string): Usuario {
    return {
        id: `user_${Math.random() * 100000}`,
        name: nombre,
        password: '1234'
    };
}

const manolo = newUsuario('manolo');
// if (manolo instanceof Usuario) {
//     console.log(manolo.name)
// }
