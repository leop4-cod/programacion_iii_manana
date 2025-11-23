console.log("FUNCIONES")

console.log("FORMA CLASICA");
function saludar(){
    console.log("HOLA DESDE UNA FUNCION CLASICA");
}
saludar();
console.log("FORMA CON PARAMETROS Y RETORNO");
function sumar(a, b) {
    return a + b;
}
let resultado = sumar(5, 10);
console.log("El resultado de la suma es:", resultado);

console.log("FUNCIONES FLECHA");
const resta = (a, b) => {
    return a - b;
}
let resultadoResta = resta(9, 5);
console.log("la resta es:", resultadoResta);

console.log("Funcion retorno directo"); 
const cuadrado = x=>x+x;
console.log("Cuadrado de 5 :", resultado);  