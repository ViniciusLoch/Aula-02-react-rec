import React from 'react'
import { useState } from 'react'

const HookContador = () => {

    const [Contador, setContador] = useState(1)

    function incrementarContador() {
        setContador(Contador + 1)
    }

  return (
    <div>
        <h1>Contador com use state</h1>
        <button onClick={incrementarContador}>Clique aqui</button>
        <h2>O contador está em {Contador}, clique para aumentar!</h2>
    </div>
  )
}

export default HookContador