class Paciente {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    necesitaControl() {
        if (this.edad >= 18) {
            console.log("requiere control nutricional de adulto");
        } else {
            console.log("requiere control nutricional pediatrico");
        }
    }
    mostrar() {
        console.log(this.nombre, this.edad);
    }
}

const paciente1 = new Paciente('Carlos', 17);
paciente1.necesitaControl();
paciente1.mostrar();
