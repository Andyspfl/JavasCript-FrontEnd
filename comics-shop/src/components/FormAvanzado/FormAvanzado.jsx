import React, { useState } from 'react'

function FormAvanzado() {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validarDatos, setValidarDatos] = useState(false);

    const handleNombreChange = (e) => {setNombre(e.target.value);}
    const hadleEmailChange = (e) => {setEmail(e.target.value);}
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const validacion = () => {
        if (!nombre || !email || !password) {
            alert('Por favor, completa todos los campos');
            return;
        }
        setValidarDatos(true);
    }

    
  return (
    <div>
        <h2>Formulario Avanzado</h2>
        <div>
            <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={handleNombreChange}
            />
        </div>
        <div>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={hadleEmailChange}
            />
        </div>
        <div>
            <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
            />
        </div>
        <button onClick={validacion}>Validar Datos</button>
        {validarDatos && (
            <div>
            <h3>Nombre: {nombre}</h3>
            <h3>Email: {email}</h3>
            <h3>Contraseña: {password}</h3>
            </div>
        )}
    </div>
  )
}

export default FormAvanzado
