/*
import { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

export default function FetchUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsersData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }

                const data: User[] = await response.json();

                setUsers(data);

            } catch (err) {
                if (err instanceof Error) {
                    setError(`Fallo al cargar los usuarios: ${err.message}`);
                } else {
                    setError('Ocurrió un error desconocido.');
                }
                setUsers([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsersData();

    }, []);

    return (
        <div>
            <h3>Lista de Usuarios:</h3>

            {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
            {isLoading && !error && <p>Cargando lista de usuarios...</p>}
            {!isLoading && !error && users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            ) : (!isLoading && !error && users.length === 0) ? (
                <p>No se encontraron usuarios.</p>
            ) : null}
        </div>
    );
}
*/
import { useEffect, useState } from 'react';

export default function FetchUser() {
    const [users, setUsers] = useState<any | null>([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users'); 
                const data = await res.json();
                
                setUsers(data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
                setUsers(null); 
            }
        };

        fetchUserData();
        
    }, []);

    return (
        <div>
            <h3>Usuario:</h3>
            {users ? (
                users.map((user: any, i: number) => (
                    <li key={i}>
                        {user.name} - {user.email}
                    </li>
                ))
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}