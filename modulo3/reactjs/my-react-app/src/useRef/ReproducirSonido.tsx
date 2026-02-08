import { useRef } from 'react';

export default function ReproductorSonido() {
    // Tipamos el ref para que apunte a un <audio>
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const reproducir = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div>
            <button onClick={reproducir}>🔊 Reproducir sonido</button>
            <audio
                ref={audioRef}
                src="https://www.soundjay.com/buttons/button-3.mp3"
            />
        </div>
    );
}