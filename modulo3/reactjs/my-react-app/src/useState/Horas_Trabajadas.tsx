import { useState } from 'react';

export default function SalarioSemanal() {
    const [horas, setHoras] = useState('');
    const [valorHora, setValorHora] = useState('');
    const [salario, setSalario] = useState<number | null>(null);

    const calcularSalario = () => {
        const h = parseFloat(horas);
        const v = parseFloat(valorHora);

        if (isNaN(h) || isNaN(v) || h <= 0 || v <= 0) {
            alert('Ingrese valores válidos');
            return;
        }

        const total = h * v;
        setSalario(total);
    };

    return (
        <div>
            <h2>Cálculo de salario semanal</h2>

            <input
                type="number"
                placeholder="Horas trabajadas"
                value={horas}
                onChange={(e) => setHoras(e.target.value)}
            />
            <br />

            <input
                type="number"
                placeholder="Valor por hora"
                value={valorHora}
                onChange={(e) => setValorHora(e.target.value)}
            />
            <br />

            <button onClick={calcularSalario}>Calcular salario</button>

            {salario !== null && (
                <p>Salario semanal: <strong>${salario.toFixed(2)}</strong></p>
            )}
        </div>
    );
}