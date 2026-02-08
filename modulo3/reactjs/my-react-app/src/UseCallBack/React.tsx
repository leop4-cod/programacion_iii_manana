import { useState } from 'react';

export default function TablaMultiplicar() {
    const [numero, setNumero] = useState(5);

    return (
        <div>
            <p>Número: <input type="number" value={numero} onChange={(e) => setNumero(parseInt(e.target.value) || 0)} /></p>
            <div>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((multiplier) => (
                    <div key={multiplier}>
                        {numero} × {multiplier} = {numero * multiplier}
                    </div>
                ))}
            </div>
        </div>
    );
}