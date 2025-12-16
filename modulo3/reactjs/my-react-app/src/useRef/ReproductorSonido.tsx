import { useRef } from 'react';

export default function ReproductorSonido() {
  const audioRef = useRef(null);

  const reproducir = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((err) => console.log("No se pudo reproducir:", err));
    }
  };

  return (
    <div>
      <button onClick={reproducir}>Reproducir sonido</button>
      <audio
        ref={audioRef}
        src="https://www.soundjay.com/buttons/button-3.mp3"
        preload="auto"
      />
    </div>
  );
}