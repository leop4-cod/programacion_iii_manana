class Dieta {
    constructor(nombre, objetivo) {
        this.nombre = nombre;
        this.objetivo = objetivo;
    }
    iniciar() {
        console.log(`${this.nombre} con objetivo ${this.objetivo} esta iniciada`);
    }
    aplicar() {
        console.log(`${this.nombre} con objetivo ${this.objetivo} esta en proceso`);
    }
    finalizar() {
        console.log(`${this.nombre} con objetivo ${this.objetivo} esta finalizada`);
    }
}

const miDieta = new Dieta('Dieta Balanceada', 'Bajar de peso');
miDieta.iniciar();
miDieta.aplicar();
miDieta.finalizar();

console.log(miDieta.nombre);
console.log(miDieta.objetivo);
