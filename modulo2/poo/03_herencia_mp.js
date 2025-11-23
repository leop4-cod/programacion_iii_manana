class Alimento {
    constructor(nombre) {
        this.nombre = nombre;
    }
    informacion() {
        console.log("informacion general del alimento");
    }
}

class Fruta extends Alimento {}

const miFruta = new Fruta('Manzana');
const miAlimento = new Alimento('Avena');
miFruta.informacion();
miAlimento.informacion();
