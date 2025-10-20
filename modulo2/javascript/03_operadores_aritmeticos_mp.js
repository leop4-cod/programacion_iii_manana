console.log("Operadores Aritmeticos en Consulta Dietetica");

pacientesActivos = 15;
pacientesNuevos = 3;

console.log("Pacientes y Operaciones");

console.log("Total de pacientes:");
totalPacientes = pacientesActivos + pacientesNuevos;
console.log("Activos + Nuevos =", totalPacientes);

console.log("Pacientes pendientes de consulta:");
pacientesAtendidos = 5;
pacientesPendientes = totalPacientes - pacientesAtendidos;
console.log("Total - Atendidos =", pacientesPendientes);

console.log("Horas totales de consulta:");
horasPorPaciente = 4;
horasTotales = pacientesPendientes * horasPorPaciente;
console.log("Pacientes por Horas =", horasTotales);

console.log("Pacientes por nutricionista:");
numeroNutricionistas = 3;
pacientesPorNutricionista = pacientesPendientes / numeroNutricionistas;
console.log("Pendientes ÷ Nutricionistas =", pacientesPorNutricionista);

console.log("Nutricionista asignado (por rotación):");
nutricionistasDisponibles = 5;
nutricionistaAsignado = pacientesPendientes % nutricionistasDisponibles;
console.log("Paciente asignado al nutricionista #", nutricionistaAsignado + 1);

console.log("Nivel de dificultad del plan:");
nivelBase = 2;
factorComplejidad = 3;
complejidadTotal = nivelBase ** factorComplejidad;
console.log("Complejidad =", complejidadTotal);

console.log("\nOperadores de Comparacion en Consulta Dietetica");

pacienteId = "2025001";
numeroConsulta = 2025001;

console.log("Verificacion de paciente:");
console.log("ID coincide (débil) ==", pacienteId == numeroConsulta);
console.log("ID coincide (estricta) ===", pacienteId === numeroConsulta);
console.log("ID no coincide (débil) !=", pacienteId != numeroConsulta);
console.log("ID no coincide (estricta) !==", pacienteId !== numeroConsulta);
console.log("Alta prioridad >", pacientesPendientes > 10);
console.log("Baja prioridad <", pacientesPendientes < 5);
console.log("Carga normal >=", pacientesPorNutricionista >= 4);
console.log("Carga manejable <=", pacientesPorNutricionista <= 6);

console.log("\nOperadores Logicos en Consulta Dietetica");

pacienteActivo = true;
documentacionCompleta = true;
console.log("¿Listo para consulta? &&", pacienteActivo && documentacionCompleta);
console.log("¿Requiere atencion? ||", pacientesPendientes > 10 || pacientesNuevos > 0);
console.log("¿No ha sido atendido? !", !pacienteActivo);
