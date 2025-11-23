let temperatura =35;

if(temperatura>30){
    console.log("hace calor");
}

let password ="pass123";
if(password==="pass12345"){
    console.log("usuario logeado");
}  else{
    console.log("acceso denegado");
} 

let nota =7;
if(nota>=9){
    console.log("sobresaliente");
}  else if ("nota>=6"){
    console.log("aprobado");
} else {
    console.log("reprobado");
}

let edad=20;
let tiene_licencia=true;
if(Edad>=18){
    if (tiene_licencia){
        console.log("puede conducir");
    } else{
        console.log("Necesita licencia para conducir ");
    }
} else {
    console.log("es menor de edad")
}
// Estructura switch

let dia ="lunes";

switch(dia){
    case"lunes":
        console.log("inicio de semana");
        break;
    case "viernes":
        console.log("Ultimo dia laboral");
    default:
        console.log("dia normal");
}

let a= 30;
let b=40;
let c=50;
mayor = 0;
if (a>b){
    mayor=a;
} if (c>mayor){
    mayor=c;
}
console.log("el numero mayor es", mayor);

