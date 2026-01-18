import { useState } from 'react';

export default function CalculoAreaTriangulo() {
    const [base, setBase] = useState('');
    const [altura, setAltura] = useState('');
    const [area, setArea] = useState<number | null>(null);

    const calcularArea = () => {
        const b = parseFloat(base);
        const h = parseFloat(altura);

        if (isNaN(b) || isNaN(h) || b <= 0 || h <= 0) {
            alert('Ingrese valores válidos');
            return;
        }

        const resultado = (b * h) / 2;
        setArea(resultado);
    };

    return (
        <div>
            <h2>Calcular área de un triángulo</h2>

            <input
                type="number"
                placeholder="Base"
                value={base}
                onChange={(e) => setBase(e.target.value)}
            />
            <br />

            <input
                type="number"
                placeholder="Altura"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />
            <br />

            <button onClick={calcularArea}>Calcular área</button>

            {area !== null && (
                <p> El área del triángulo es: <strong>{area}</strong></p>
            )}
        </div>
    );
}