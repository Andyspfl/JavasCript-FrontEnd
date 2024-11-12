import React from 'react'
import { useState } from 'react';

function ContadorPalabras() {
    const [palabras, setPalabras] = useState('')
    const [contador, setContador] = useState(0)
    const handlePalabrasChange = (e) => {
        setPalabras(e.target.value)
    }
    const contarPalabras = () => {
        setContador(palabras.split(' ').length)
        alert(`El texto tiene ${contador} palabras`)
    }
  return (
    <div>
      <input type="text"
      onChange={handlePalabrasChange}
      placeholder='Ingrese las palabras'
      value={palabras} />
      <button onClick={contarPalabras}>Contar</button>
    </div>
  )
}

export default ContadorPalabras
