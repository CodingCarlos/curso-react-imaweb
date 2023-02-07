namespace Parking {
    export interface IPlaza {
        planta: number;
        numero: number;
        // aparcar: (car: Coche) => void
        // aparcar(car: Coche): void;
    }

    interface DecoraIPlaza extends IPlaza {
        [clave: string]: number | string;
    }

    export class Plaza implements IPlaza {
        planta:number;
        numero:number;
        constructor(planta: number, numero: number) {
            this.planta = planta;
            this.numero = numero;
        }
    }
}
