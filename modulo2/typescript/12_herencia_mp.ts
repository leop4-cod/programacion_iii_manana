import { PersonalNutricional, Nutricionista } from "./11_herencia_mp";

const profesional1 = new PersonalNutricional('Carlos Diaz', 'Asistente');
console.log(profesional1.nombre);
console.log(profesional1.rol);
profesional1.evaluar();

console.log("\n");

const nutricionista1 =
    new Nutricionista('Ana Ruiz', 'Nutricionista Senior');
console.log(nutricionista1.nombre);
console.log(nutricionista1.rol);
nutricionista1.evaluar();
