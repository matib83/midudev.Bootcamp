import React from 'react'
import ReactDOM from 'react-dom'
//import { useState } from 'react';

const rootElemnet = document.getElementById('root');

const App = (props) => {
return <h1>{props.contadorInicial}</h1>
}

let contador = 0

const refresh = () => {
  ReactDOM.render(
    <App contadorInicial={contador} />, 
    rootElemnet
    )
}

setInterval (() => { 
  refresh();
  contador++;
}, 1000 )
