import React from 'react'
import { useState } from 'react'
function Registro() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    const [esValido, setEsValido] = useState(false);

    const handleNombreChange = (e) => setNombre(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handleContraseniaChange = (e) => setContrasenia(e.target.value)

    const validarFormulario = () => {
        setEsValido(nombre.length > 0 && contrasenia.length > 6 && email.includes('@'));
    }

    

  return (
    <div>
      <h2>Formulario de Registro</h2>
      <input type="text"
      placeholder='Nombre'
      value={nombre}
      onChange={handleNombreChange}
      onBlur={validarFormulario} />

      <input type="text"
      placeholder='email'
      value={email}
      onChange={handleEmailChange}
      onBlur={validarFormulario} />

      <input type="password"
      placeholder='Contrasenia'
      value={contrasenia}
      onChange={handleContraseniaChange}
      onBlur={validarFormulario} />

      <button onClick={() => alert('Registro exitoso!')}
        disabled = {!esValido}>
            Registrar
        </button>
    </div>
  )
}

export default Registro
