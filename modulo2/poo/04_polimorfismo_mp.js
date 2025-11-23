class Nutricionista {
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }
    trabajar(){
        console.log("Nutricionista atendiendo pacientes...");
    }
    calcularVacaciones(){
        return this.salario * 0.15;
    }
    horasExtra(horas){
        return ((this.salario / 30) / 8) * horas * 2;
    }
}

class NutricionistaDeportiva extends Nutricionista {
    calcularVacaciones(){
        return this.salario * 0.20;
    }
    horasExtra(horas){
        return ((this.salario / 30) / 8) * horas * 3;
    }
}

class NutricionistaClinica extends Nutricionista {
    calcularVacaciones(){
        return this.salario * 0.10;
    }
}

const nutriAna = new NutricionistaDeportiva('Ana', 2000);
const nutriLuis = new NutricionistaClinica('Luis', 1200);

nutriAna.trabajar();
nutriLuis.trabajar();

console.log(nutriAna.calcularVacaciones());
console.log(nutriLuis.calcularVacaciones());
console.log(nutriAna.horasExtra(5));
console.log(nutriLuis.horasExtra(4));
