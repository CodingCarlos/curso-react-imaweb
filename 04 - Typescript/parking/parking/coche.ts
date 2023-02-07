// import { Plaza } from "./plaza";
/// <reference path="plaza.ts" />

namespace Parking {
    export interface Coche {
        matricula: string;
        plaza?: Parking.Plaza;
    }
}