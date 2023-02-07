// Modulos
//import { Direccion, Vigilante as EdificioVigilante } from './edificio';
import { Dueno, Vigilante as ParkingVigilante } from './parking';

// Namespaces
/// <reference path="parking/plaza.ts" />
/// <reference path="parking/coche.ts" />

const plaza1:Parking.Plaza = new Parking.Plaza(0, 1);
const plaza2:Parking.Plaza = new Parking.Plaza(0, 2);
const plaza3:Parking.Plaza = new Parking.Plaza(1, 11);
const plaza4:Parking.Plaza = new Parking.Plaza(1, 12);

const coche1:Parking.Coche = { matricula: '4741FDX', plaza: plaza1 }
const coche2:Parking.Coche = { matricula: '8712HGL', plaza: plaza2 }
const coche3:Parking.Coche = { matricula: '7390LLS', plaza: plaza4 }

const dueno1:Dueno = { nombre: 'Paco', coches: [coche1]}
const dueno2:Dueno = { nombre: 'Elisa', coches: [coche2, coche3]}

const vigilante:ParkingVigilante = { nombre: 'Eusebio', placa: 'A01234' }

// class Parking {
//     plazas: Plaza[];
//     coches: Coche[];
//     duenos: Dueno[];
//     vigilante: Vigilante;

// }