class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        console.log("realizar algun ruido")
    }

}
 class Perro extends Animal{}
const miPerro = new Perro('toby');
const miAnimal = new Animal('Lucero');
miPerro.hacerSonido();
miAnimal.hacerSonido();