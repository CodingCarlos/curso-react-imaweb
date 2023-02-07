"use strict";
class Empleado {
    constructor(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
    }
    trabajar() {
        console.log('QUE BIEN TRABAJO... (¿otro café, no?)');
        return false;
    }
    cambiarDNI(nuevoDni) {
        this.dni = nuevoDni;
    }
}
class EmpleadoDelMes extends Empleado {
    constructor(nombre, dni, premio) {
        super(nombre, dni);
        this.premio = premio;
        this._foto = `fotos/${dni}.jpeg`;
        this.cambiarDNI('asdsd');
    }
    set foto(valor) {
        this._foto = valor;
    }
    get foto() {
        return `http://miweb.com/${this._foto}`;
    }
}
// ---- otro archivo
const paula = new EmpleadoDelMes('Paula', '51515151A', 3000);
// paula.dni = 'asdasd';
// paula.cambiarDNI('asdasd');
console.log(paula.foto);
