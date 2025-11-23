export class Oficial {
    nombre: string;
    badge: string;

    constructor(nombre: string, badge: string) {
        this.nombre = nombre;
        this.badge = badge;
    }

    presentarse(): void {
        console.log(`Soy ${this.nombre} con Badge ${this.badge}`);
    }
}