import { PersonalNutricional } from "./11_herencia_mp";

export class EspecialistaDietetico extends PersonalNutricional {
    evaluarMuestras(): void {
        console.log(`${this.nombre} esta evaluando muestras en el laboratorio dietetico`);
    }
}

const especialista =
    new EspecialistaDietetico('Luis Romero', 'Especialista Dietetico');
console.log(especialista.nombre);
console.log(especialista.rol);
especialista.evaluar();
especialista.evaluarMuestras();
