import { useState } from "react";

export default function AreaTriangulo(props: any) {
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const area = (Number(base) * Number(altura)) / 2;
    props.onCalcular(area);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number" 
        placeholder="Base"
        onChange={e => setBase(e.target.value)} 
      /><br/>

      <input 
        type="number" 
        placeholder="Altura"
        onChange={e => setAltura(e.target.value)} 
      /><br/>

      <button type="submit">Calcular área</button>
    </form>
  );
}
