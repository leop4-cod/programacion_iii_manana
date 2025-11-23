import { RegistroDietetico } from "./09_acceso_mp";

const registro1 = new RegistroDietetico("REG-2024-001");

console.log("=== INFORMACION DEL REGISTRO DIETETICO ===");
console.log(registro1.getNumeroRegistro());
console.log(registro1.getFecha());
console.log(registro1.getAtributes());
