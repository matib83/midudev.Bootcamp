import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react';

const rootElemnet = document.getElementById('root');

const App = (props) => {
  const [contadorValue, updateContador] = useState(0)

  //const contador = useState(0)
  //const contadorValue = contador[0]
  //const contadorUpdate = contador [1]

console.log("render")

  return (
      <div>  
        <p>El valor del conatdor es: </p>
        <h1>{contadorValue}</h1>
        <button 
          onClick={() => {
            console.log("click");
            updateContador(contadorValue + 1);
          }}
        >
          Incrementar
        </button>
      </div>
    )
}

ReactDOM.render(<App />, rootElemnet)

