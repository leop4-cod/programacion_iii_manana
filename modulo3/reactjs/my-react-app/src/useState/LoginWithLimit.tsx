
import { useState } from 'react';

export default function LoginWithLimit() {
    const [access, setAccess] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordSaved = "123456";
    const emailSaved = "alexander@gmail.com";


    const handleAccess = () => {
        if (attempts >= 3) return;

        // Validate email and password
        if (email === emailSaved && password === passwordSaved) {
            setAccess(true);
        } else {
            setAttempts(attempts + 1);
        }
    };

    // Check if credentials were incorrect (used for showing error message)
    const isCredentialsIncorrect = attempts > 0 && !(email === emailSaved && password === passwordSaved);

    return (
        <div>
            {!access ? (
                <>
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} /><br />
                    <input
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)} /><br />
                    <button onClick={handleAccess} disabled={attempts >= 3}>
                        Intentar acceso
                    </button>
                    {attempts >= 3 && <p>🔒 Acceso bloqueado por demasiados intentos.</p>}
                    {/* Show error message when credentials are incorrect */}
                    {isCredentialsIncorrect && (
                        <p style={{ color: 'red' }}>Credenciales incorrectas. Intento {attempts} de 3.</p>
                    )}
                </>
            ) : (
                <p>✅ Acceso concedido</p>
            )}
        </div>
    );
}
