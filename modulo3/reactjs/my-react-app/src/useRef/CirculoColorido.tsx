import { useRef } from 'react';

export default function CirculoColorido() {
    const circuloRef = useRef<HTMLDivElement | null>(null);
    const cuadradoRef = useRef<HTMLDivElement | null>(null);

    const cambiarColor = () => {
        const colores = ['crimson', 'royalblue', 'mediumseagreen', 'orange', 'violet'];
        const color = colores[Math.floor(Math.random() * colores.length)];
        if (circuloRef.current) {
            circuloRef.current.style.backgroundColor = color;
        }
    };

    const cambiarCuadrado = () => {
        const colores = ['blue', 'green', 'red', 'yellow', 'purple'];
        const color = colores[Math.floor(Math.random() * colores.length)];
        if (cuadradoRef.current) {
            cuadradoRef.current.style.backgroundColor = color;
        }
    };

    return (
        <>
            {/* Círculo */}
            <div
                ref={circuloRef}
                style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    backgroundColor: 'gray',
                    marginBottom: '1rem',
                    transition: 'background-color 0.5s'
                }}
            />
            <button onClick={cambiarColor}>Cambiar color del círculo</button>

            {/* Cuadrado */}
            <div
                ref={cuadradoRef}
                style={{
                    width: '120px',
                    height: '120px',
                    backgroundColor: 'gray',
                    marginTop: '1rem',
                    transition: 'background-color 0.5s'
                }}
            />
            <br />
            <button onClick={cambiarCuadrado}>Cambiar color del cuadrado</button>
        </>
    );
}