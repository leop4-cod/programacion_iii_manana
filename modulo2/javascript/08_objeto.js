console.log("OBJETOS");
let persona = {
    nombre: "Leo",
    edad: 19,
    ciudad: "Quito"
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona["ciudad"]);

console.log("Modificación del objeto");
persona.nombre = "Andresito";
console.log(persona);

console.log("Incluir clave al objeto");
persona.direccion = "Av. Occidental";
console.log(persona);

console.log("Eliminar clave del objeto");
delete persona.direccion;
console.log(persona);

console.log("Recorrer un objeto");
for (let clave in persona){
    console.log(clave);
}

console.log("Mostrar claves con Object.keys");
console.log(Object.keys(persona));

console.log("Mostrar valores con Object.values");
console.log(Object.values(persona));

console.log("Objetos anidados");
let estudiante = {
    nombre: "Leo",
    apellido: "Perez",
    contacto: {
        correo: "leo@gmail.com",
        telefono: "0995974161",
        celular: "0995974161",
    },
    materias: [
        {
            nombre: "Programación III",
            calificación: 10
        },
        {
            nombre: "Base de Datos II",
            calificación: 9
        }
    ]
};
console.log("Estudiante: ", estudiante);