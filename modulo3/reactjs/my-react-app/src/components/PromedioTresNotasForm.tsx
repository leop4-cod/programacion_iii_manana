import { useState } from 'react';

export default function PromedioTresNotasForm() {
    const [nota1, setNota1] = useState<string>('');
    const [nota2, setNota2] = useState<string>('');
    const [nota3, setNota3] = useState<string>('');
    const [promedio, setPromedio] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const num1 = parseFloat(nota1);
        const num2 = parseFloat(nota2);
        const num3 = parseFloat(nota3);
        
        if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
            const resultado = (num1 + num2 + num3) / 3;
            setPromedio(resultado.toFixed(2));
        } else {
            setPromedio('Por favor ingrese números válidos');
        }
    };

    return (
        <div>
            <h2>Calculadora de Promedio de Tres Notas</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Ingrese nota 1"
                    value={nota1}
                    onChange={(e) => setNota1(e.target.value)}
                    step="0.1"
                    min="0"
                    max="10"
                />
                <input
                    type="number"
                    placeholder="Ingrese nota 2"
                    value={nota2}
                    onChange={(e) => setNota2(e.target.value)}
                    step="0.1"
                    min="0"
                    max="10"
                />
                <input
                    type="number"
                    placeholder="Ingrese nota 3"
                    value={nota3}
                    onChange={(e) => setNota3(e.target.value)}
                    step="0.1"
                    min="0"
                    max="10"
                />
                <button type="submit">Calcular Promedio</button>
            </form>
            {promedio && (
                <div>
                    <h3>Promedio: {promedio}</h3>
                </div>
            )}
        </div>
    );
}