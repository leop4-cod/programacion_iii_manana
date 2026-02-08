import { useState, useDeferredValue } from 'react';

export default function FormularioDiferido() {
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');

    const emailDiferido = useDeferredValue(email);
    const nombreDiferido = useDeferredValue(nombre);
    const apellidosDiferido = useDeferredValue(apellidos);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMensaje('Registro exitoso');
    };

    return (
        <>
            <h2>Formulario de Registro</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <p>
                        {emailDiferido === ''
                            ? 'Esperando...'
                            : emailDiferido.includes('@') && emailDiferido.includes('.')
                                ? 'Email válido'
                                : 'Email inválido'}
                    </p>
                </div>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                    <p>Vista diferida: {nombreDiferido}</p>
                </div>
                <div>
                    <label>Apellidos:</label>
                    <input
                        type="text"
                        value={apellidos}
                        onChange={e => setApellidos(e.target.value)}
                    />
                    <p>Vista diferida: {apellidosDiferido}</p>
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
            {mensaje && <div>{mensaje}</div>}
        </>
    );
}