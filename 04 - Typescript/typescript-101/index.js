import { suma } from "./suma";
import { juan } from "./rrhh";
console.log(juan);
let texto = 'String 123';
const textos = [texto];
// const a:[number, string, boolean] = [1, 'a', true];
// const arr: Array<any> = [1,2,3,4,5];
function pimerasLet(str) {
    return str.substring(0, 2);
}
function algoBonito(a) {
    return `:) ${a}`;
}
textos.forEach(texto => {
    const sub = pimerasLet(texto);
    console.log(sub);
});
console.log(algoBonito('Yo'));
console.log(algoBonito(42));
console.log(suma(3, 2));
