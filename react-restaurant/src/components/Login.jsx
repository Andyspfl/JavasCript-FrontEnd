import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/login', {
                email,
                password,
            });

            // Asumiendo que el servidor devuelve un token y un mensaje
            const { token, mensaje: mensajeServidor } = response.data;

            // Guarda el token en el almacenamiento local o en el contexto si es necesario
            localStorage.setItem('token', token);

            // Muestra el mensaje de éxito
            setMensaje('Inicio de sesión exitoso.'); // Mensaje de éxito
        } catch (error) {
            console.error(error); // Para depuración
            if (error.response) {
                setMensaje(error.response.data.mensaje); // Mensaje de error
            } else {
                setMensaje('Error en la conexión.');
            }
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
};

export default Login;