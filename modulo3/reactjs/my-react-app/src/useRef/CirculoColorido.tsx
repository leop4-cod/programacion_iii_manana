import { useRef } from 'react';

export default function CirculoColorido() {
  const circuloRef = useRef(null);

  const cambiarColor = () => {
    const colores = ['crimson', 'royalblue', 'mediumseagreen', 'orange', 'violet'];
    const color = colores[Math.floor(Math.random() * colores.length)];
    circuloRef.current.style.backgroundColor = color;
  };

  return (
    <>
      <div
        ref={circuloRef}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          backgroundColor: '#2c2c2c',   // color inicial cambiado
          marginBottom: '1rem',
          transition: 'background-color 0.5s'
        }}
      />

      <button
        onClick={cambiarColor}
        style={{
          padding: '10px 16px',
          backgroundColor: '#4f46e5',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        Cambiar color
      </button>
    </>
  );
}
