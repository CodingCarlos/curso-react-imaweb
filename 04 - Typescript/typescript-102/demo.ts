interface ObraArte {
    nombre: string;
}

interface Pintura extends ObraArte {
    esLienzo: boolean;
}

interface Escultura extends ObraArte {
    peso: number;
}

// ...

class Museo<T extends ObraArte> {
    obras: T[];

    constructor(obras: T[]) {
        this.obras = obras;
    }
}

const obrasPrado = [
    'meninas',
    'negradegoya'
];

const esculturas: Escultura[] = [
    { nombre: 'davidemi', peso: 140 },
    { nombre: 'venus', peso: 20 },
]

// const m1 = new Museo(obrasPrado);
const m2 = new Museo(esculturas);
