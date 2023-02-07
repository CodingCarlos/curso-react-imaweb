interface IEmpleado {
    nombre: string,
    readonly dni: string,
    role: string,
}

class Empleado implements IEmpleado {
    nombre: string;
    private _dni: string;
    role: string;

    constructor(nombre: string, dni: string, role: string) {
        this.nombre = nombre;
        this._dni = dni;
        this.role = role;
    }

    trabajar(): boolean {
        console.log('QUE BIEN TRABAJO... (¿otro café, no?)');
        return false;
    }

    protected cambiarDNI(nuevoDni: string) {
        this._dni = nuevoDni;
    }

    get dni() {
        return this._dni;
    }
    set dni(val) {
        this._dni = val;
    }
}

class EmpleadoDelMes extends Empleado {
    premio: number;
    private _foto: string;

    constructor(nombre: string, dni: string, role: string, premio: number) {
        super(nombre, dni, role);
        this.premio = premio;

        this._foto = `fotos/${dni}.jpeg`;

        this.cambiarDNI('asdsd')
    }

    set foto(valor: string) {
        this._foto = valor;
    }

    get foto(): string {
        return `http://miweb.com/${this._foto}`;
    }
}

// ---- otro archivo

const paula = new EmpleadoDelMes('Paula', '51515151A', 'developer', 3000);

paula.foto = 'asdasd';
console.log(paula.foto);