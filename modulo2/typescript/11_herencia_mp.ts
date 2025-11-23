export class PersonalNutricional {
    public nombre: string;
    public rol: string;

    constructor(
        nombre: string,
        rol: string
    ) {
        this.nombre = nombre;
        this.rol = rol;
    }

    evaluar(): void {
        console.log(`${this.nombre} esta evaluando al paciente`);
    }
}

export class Nutricionista extends PersonalNutricional { }
