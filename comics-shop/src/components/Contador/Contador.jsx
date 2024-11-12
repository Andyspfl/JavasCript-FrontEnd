import React, { useState } from 'react'

function BotonIncrementar({ onIncrementar }) {
    return <button onClick={onIncrementar}>Incrementar</button>
}
function Contador() {
    const [contador, setContador] = useState(0);
    const incrementar = () => {setContador(contador + 1);
    };
    return (
        <div>
        <h1>Contador: {contador}</h1>
        <BotonIncrementar onIncrementar={incrementar}></BotonIncrementar>
        </div>
    )
}

export default Contador
