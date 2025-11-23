"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroDietetico = void 0;

var RegistroDietetico = /** @class */ (function () {
    function RegistroDietetico(numeroRegistro) {
        this.idGeneric = 'REG-2024-';
        this.numeroRegistro = numeroRegistro;
        this.generarFecha();
    }
    RegistroDietetico.prototype.generarFecha = function () {
        this.fecha = (new Date()).toDateString();
    };
    RegistroDietetico.prototype.getFecha = function () {
        return this.fecha;
    };
    RegistroDietetico.prototype.getAtributes = function () {
        return {
            numeroRegistro: this.numeroRegistro,
            fecha: this.fecha,
            id: this.idGeneric
        };
    };
    return RegistroDietetico;
}());
exports.RegistroDietetico = RegistroDietetico;
