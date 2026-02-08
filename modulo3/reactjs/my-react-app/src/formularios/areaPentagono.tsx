import { useState } from 'react';

export default function AreaPentagono() {
    const [lado, setLado] = useState("");
    const [apotema, setApotema] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const ladoNum = parseFloat(lado);
        const apotemaNum = parseFloat(apotema);

        if (ladoNum > 0 && apotemaNum > 0) {
            const perimetro = 5 * ladoNum;
            const area = (perimetro * apotemaNum) / 2;
            alert(`Area de un pentagono: ${area.toFixed(2)}`);
        } else {
            alert("ingrese el valor");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Longitud del lado"
                value={lado}
                onChange={e => setLado(e.target.value)}
            /><br />

            <input
                type="number"
                placeholder="Apotema"
                value={apotema}
                onChange={e => setApotema(e.target.value)}
            /><br />

            <button type="submit">Calcular Area</button>
        </form>
    );
}