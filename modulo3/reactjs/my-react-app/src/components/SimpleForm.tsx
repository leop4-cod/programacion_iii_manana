import { useState } from 'react';

export default function SimpleForm() {
    //const [name, setName] = useState('');
    const [numero1, setNumero1] = useState<number>(0);
    const [numero2, setNumero2] = useState<number>(0);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert(`Resultado, ${numero1 + numero2}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Numero1"
                value={numero1}
                onChange={(e) => setNumero1(Number(e.target.value))}
            />

            <input
                type="text"
                placeholder="Numero2"
                value={numero2}
                onChange={(e) => setNumero2(Number(e.target.value))}
            />
            <button type="submit">Enviar</button>
        </form>
    );
}


