var edad = 23;
var nombre = "Luis";
var enConsultaActiva = true;
var nivelActividad = 6;

if (edad >= 18 && enConsultaActiva) {
    console.log("Paciente apto para consulta dietetica");
} else {
    console.log("Paciente no apto para consulta");
}

var alimentosPermitidos = ["avena", "manzana", "pechuga de pollo", "brocoli"];

for (var i = 0; i < alimentosPermitidos.length; i++) {
    console.log(alimentosPermitidos[i]);
}

var EstadoPlan;
(function (EstadoPlan) {
    EstadoPlan[EstadoPlan["Pendiente"] = 0] = "Pendiente";
    EstadoPlan[EstadoPlan["EnProceso"] = 1] = "EnProceso";
    EstadoPlan[EstadoPlan["Entregado"] = 2] = "Entregado";
})(EstadoPlan || (EstadoPlan = {}));

console.log(EstadoPlan);
console.log(EstadoPlan.Entregado);
