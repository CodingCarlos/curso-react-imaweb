import { Persona } from '../persona';
import { Coche } from './coche';

export interface Dueno extends Persona {
    coches: Coche[];
}