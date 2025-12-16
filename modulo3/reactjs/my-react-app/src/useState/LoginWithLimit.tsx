import { useState } from 'react';

export default function LoginWithLimit() {
  const [access, setAccess] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordSaved = "12345";
  const emailSaved = "andryzambrano1709@gmail.com";

  const handleAccess = () => {
    if (attempts >= 3) return;
    if (password===passwordSaved && email===emailSaved){
      const success = window.confirm("¿Tienes permiso para acceder?");
      if (success) setAccess(true);
      } else {
        window.confirm("Acceso denegado");
        setAttempts(attempts + 1);
      }
     
  };

  return (
    <div>
      {!access ? (
        <>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br/>
          <button onClick={handleAccess} disabled={attempts >= 3}>
            Intentar acceso
          </button>
          {attempts >= 3 && <p>🔒 Acceso bloqueado por demasiados intentos.</p>}
        </>
      ) : (
        <p>✅ Acceso concedido</p>
      )}
    </div>
  );
}
