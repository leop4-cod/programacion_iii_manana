import { useState } from 'react';

export default function PromedioForm() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const promedio = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
    alert(`El promedio es: ${promedio}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Nota 1"
        value={nota1}
        onChange={(e: any) => setNota1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Nota 2"
        value={nota2}
        onChange={(e: any) => setNota2(e.target.value)}
      />

      <input
        type="number"
        placeholder="Nota 3"
        value={nota3}
        onChange={(e: any) => setNota3(e.target.value)}
      />

      <button type="submit">Calcular promedio</button>
    </form>
  );
}
