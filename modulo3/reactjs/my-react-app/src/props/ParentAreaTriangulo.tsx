import AreaTriangulo from "./AreaTriangulo";

export default function ParentAreaTriangulo() {
  const handleCalcular = (area: number) => {
    console.log("Área del triángulo:", area);   
    alert("El área del triángulo es: " + area); 
  };

  return <AreaTriangulo onCalcular={handleCalcular} />;
}
