import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react';

const rootElemnet = document.getElementById('root');

const Counter = ({contador}) => {
  return <h1>{contador}</h1>
}

const App = (props) => {
  const [contadorValue, updateContador] = useState(0)

  //const contador = useState(0) 
  //const contadorValue = contador[0]
  //const contadorUpdate = contador [1]

console.log("render")

const handleclick = () => {
  updateContador(contadorValue + 1);
  console.log("click");
}

const handleClickReset = () => {
  updateContador (0);
}
const isEven = contadorValue %2 === 0

const mensajePar = isEven ? "Es par" : "Es impar"

  return (
      <div>  
        <p>El valor del conatdor es: </p>
        <Counter contador={contadorValue}/>
        <p>{mensajePar}</p>
        <button 
          onClick={handleclick}
            //updateContador(prevContador => {
            //  return prevContador + 1
            //})  
        >
          Incrementar
        </button>
        <button 
          onClick={handleClickReset}
            //updateContador(prevContador => {
            //  return prevContador + 1
            //})  
        >
          Reset
        </button>
      </div>
    )
}

ReactDOM.render(<App />, rootElemnet)

