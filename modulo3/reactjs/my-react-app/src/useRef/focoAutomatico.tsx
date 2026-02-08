import { useRef, useEffect } from "react";

export default function FocoAutomatico() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div>
            <label> Nombre: </label>
            <input placeholder="Escribe tu nombre aquí..." ref={inputRef} />
            <br />
            <label> Apellido: </label>
            <input placeholder="Escribe tu apellido aquí..." ref={inputRef} />
            <br />
        </div>
    );
}