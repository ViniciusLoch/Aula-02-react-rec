import React, { useState } from 'react'


const HookMegaSena = () => {
    const [numeroMega, setNumeroMega] = useState()
    const [numerosSorteados, setNumerosSorteados] = useState([])

    function sortearNumero() {
        if (numerosSorteados.length < 6) {
            let sorteado = Math.floor(Math.random() * 60) + 1
        setNumeroMega(sorteado)
        setNumerosSorteados([...numerosSorteados, sorteado])
        } else {
            alert("Já sorteamos os 6 numeros necessarios!!")
        }
        
    }

  return (
    <div>
        <h1>Sorteador da mega!!</h1>
        <button onClick={sortearNumero}>Clique para sortear um numero!</button>
        <h2>Ultimo numero sorteado {numeroMega}</h2>
        <h2>Sorteados: {numerosSorteados.join(" - ")}</h2>
    </div>
  )
}

export default HookMegaSena