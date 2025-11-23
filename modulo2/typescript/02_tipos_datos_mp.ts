let edad: number = 23;
let nombre: string = "Luis";
let enConsultaActiva: boolean = true;
let nivelActividad: any = 6;

if (edad > 18 && enConsultaActiva) {
    console.log("paciente apto para consulta dietetica");
} else {
    console.log("paciente no apto para consulta");
}

let alimentosPermitidos: string[] = ["avena", "manzana", "pechuga de pollo"];

for (let i = 0; i < alimentosPermitidos.length; i++) {
    console.log(alimentosPermitidos[i]);
}

enum EstadoPlan {
    Pendiente,
    EnProceso,
    Entregado
}

console.log(EstadoPlan);
console.log(EstadoPlan.Entregado);
