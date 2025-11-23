"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _09_acceso_1 = require("./09_acceso");

var registro1 = new _09_acceso_1.RegistroDietetico('REG-2024-001');

console.log("=== INFORMACION DEL REGISTRO DIETETICO ===");
console.log(registro1.numeroRegistro);
console.log(registro1.getFecha());
console.log(registro1.getAtributes());
