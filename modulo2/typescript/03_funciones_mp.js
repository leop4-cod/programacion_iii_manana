function saludar(paciente) {
    return "Hola ".concat(paciente);
}
console.log(saludar('Leo'));

var calcularCalorias = function (a, b) {
    return a + b;
};
console.log(calcularCalorias(500, 300));

function mensajeInicial() {
    console.log("Hola");
    console.log("Consulta dietetica activa");
}
mensajeInicial();

function calcularIndice(radio) {
    return Math.PI * radio * radio;
}

function calcularIndiceVoid(radio) {
    console.log(Math.PI * radio * radio);
}

console.log(calcularIndice(5));
calcularIndiceVoid(7);
