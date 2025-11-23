interface paciente {
    id: number;
    nombre: string;
    correo?: string;
}

const paciente1: paciente = {
    id: 12,
    nombre: 'Paciente uno'
};

const paciente2: paciente = {
    id: 13,
    nombre: 'Paciente dos',
    correo: 'contacto@consulta.com'
};

console.log(paciente1);
console.log(paciente1.id);
console.log(paciente1.nombre);
console.log(paciente1.correo);
console.log(paciente2);
console.log(paciente2.id);
console.log(paciente2.nombre);
console.log(paciente2.correo);
