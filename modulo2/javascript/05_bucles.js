for (let i = 1; i <= 10; i++) {
    console.log("Iteracion numero:", i);
}

let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log("Sumatoria indices:", suma);

let nombre = "Alex";
for (let i = 0; i <= nombre.length - 1; i++) {
    console.log(nombre[i]);
}

let tabla = 4;
console.log("Tabla de multiplicar del:", tabla);
for (let i = 1; i <= 10; i++) {
    console.log(tabla, "x", i, "=", tabla * i);
}

for (let i = 1; i <= 10; i++) {
    console.log(`Cuadrado de ${i} es ${i ** 2}`);
}

console.log("Bucle While");
let i = 1;
while (i <= 6) {
    console.log("Indice", i);
    i++;
}

let miArreglo = [-2, 3, 1, 2, 3];
let indice = 0;

while (indice < miArreglo.length) {
    console.log("Valor", indice, "es", miArreglo[indice]);
    indice++;
}

let numero = 0
while (numero <= 10) {
    if (numero % 2 === 0)
        console.log("numero", numero,"es par");
    indice++;
}

let x = 5;
do {
    console.log("x es:", x);
    x--;
} while (x != 0);

x = 1;

let mult=1
while(mult<=10){
    console.log(mult, "5=", mult*5);
    mult++;
}

let numeros = [10, 25, 7, 40, 18];
let a = 0;
let mayor = numeros[0]; 

while (i < numeros.length) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
    i++;
}
console.log("numero mayor es", mayor);




