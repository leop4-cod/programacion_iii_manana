"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oficial = void 0;

var Oficial = /** @class */ (function () {
    function Oficial(nombre, badge) {
        this.nombre = nombre;
        this.badge = badge;
    }
    Oficial.prototype.presentarse = function () {
        console.log("Soy ".concat(this.nombre, " con Badge ").concat(this.badge));
    };
    return Oficial;
}());
exports.Oficial = Oficial;
