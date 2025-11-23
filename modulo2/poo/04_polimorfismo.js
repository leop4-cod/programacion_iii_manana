class Empleado {
    constructor(nombre, salario){
        this.nombre=nombre;
        this.salario=salario;
    }
    trabajar(){
        console.log("Empleado trabajado...")
    }
    calcularVaciaciones(){
        return this.salario*0.15;
    }
    horasExtra(horas){
        return ((this.salario/30)/8)*horas*2;
    }
}
class Programador extends Empleado{
    calcularVaciaciones(){
        return this.salario*0.20;
    }
    horasExtra(horas){
        return ((this.salario/30)/8)*horas*3;
    }
}

class Diseñador extends Empleado{
    calcularVaciaciones(){
        return this.salario*0.10;
    }
}

const proPedro = new Programador ('Pedro', 2000);
const diseJuan = new Diseñador ('Juan', 1200);
proPedro.trabajar();
diseJuan.trabajar();
console.log (proPedro.calcularVaciaciones());
console.log (diseJuan.calcularVaciaciones());
console.log (proPedro.horasExtra(5));
console.log (diseJuan.horasExtra(4));