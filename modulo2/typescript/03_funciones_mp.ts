function saludar(paciente?: string): string {
    return `Hola ${paciente}`;
}
console.log(saludar('Leo'));

const calcularCalorias = (a: number, b: number): number => {
    return a + b;
}
console.log(calcularCalorias(500, 300));

function mensajeInicial(): void {
    console.log("Hola");
    console.log("Consulta dietetica activa");
}
mensajeInicial();

function calcularIndice(radio: number): number {
    return Math.PI * radio * radio;
}

function calcularIndiceVoid(radio: number): void {
    console.log(Math.PI * radio * radio);
}

console.log(calcularIndice(5));
calcularIndiceVoid(7);
