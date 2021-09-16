import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react';

const rootElemnet = document.getElementById('root');

const App = (props) => {
  const [contadorValue, contadorUpdate] = useState(0)

  //const contador = useState(0)
  //const contadorValue = contador[0]
  //const contadorUpdate = contador [1]
    
  setInterval(() => {
    contadorUpdate(contadorValue + 1)
  }, 2000)

console.log("render")

  return (
      <div>  
        <p>El valor del conatdor es: </p>
        <h1>{contadorValue}</h1>
      </div>
    )
}

ReactDOM.render(<App />, rootElemnet)

