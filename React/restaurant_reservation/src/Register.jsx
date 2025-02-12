import React, { useState } from 'react';
import axios from 'axios';
import './Register.module.css'


const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validacion de contrasenias coincidentes
        if(password !== confirmPassword){
            setError("Las contrasenias no coinciden")
            return;
        }

        // Limpiar cualquier error previo
        setError('');

        try {
            // Enviar los datos de registro a la API de Django
            const response = await axios.post('http://localhost:8000/api/users/', {
                username,
                email,
                password,
            });
            // Si la respuesta es exitosa, mostrar un mensaje
            setMessage('Registro exitoso, Ahora puedes Iniciar sesion!');

            // Limpiar los campos del formulario despues del registro
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

        } catch(err){
            // Si ocurre un error, lo mostramos
            setError('Hubo un error al registrar al usuario');
            console.error('Error de registro', err);
        };
    };
    return (
        <div>
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Usuario</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Correo electrónico</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Contraseña</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Confirmar contraseña</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <button type="submit">Registrar</button>
        </form>
    </div>
    );
};

export default Register;