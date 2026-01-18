import { useState, useId } from 'react';

export default function MayorDeTres() {
    const [numero1, setNumero1] = useState<string>('');
    const [numero2, setNumero2] = useState<string>('');
    const [numero3, setNumero3] = useState<string>('');
    const [mayor, setMayor] = useState<number | null>(null);

    const id1 = useId();
    const id2 = useId();
    const id3 = useId();

    const encontrarMayor = () => {
        const num1 = parseFloat(numero1) || 0;
        const num2 = parseFloat(numero2) || 0;
        const num3 = parseFloat(numero3) || 0;
        const mayorNum = Math.max(num1, num2, num3);
        setMayor(mayorNum);
    };

    return (
        <div>
            <div>
                <label htmlFor={id1}>Primer número:</label>
                <input
                    id={id1}
                    type="number"
                    value={numero1}
                    onChange={(e) => setNumero1(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor={id2}>Segundo número:</label>
                <input
                    id={id2}
                    type="number"
                    value={numero2}
                    onChange={(e) => setNumero2(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor={id3}>Tercer número:</label>
                <input
                    id={id3}
                    type="number"
                    value={numero3}
                    onChange={(e) => setNumero3(e.target.value)}
                />
            </div>
            <button onClick={encontrarMayor}>Encontrar Mayor</button>
            {mayor !== null && (
                <div>
                    <strong>El número mayor es: {mayor}</strong>
                </div>
            )}
        </div>
    );
}