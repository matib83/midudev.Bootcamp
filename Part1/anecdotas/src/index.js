import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => 
  <p>
    <button onClick={handleClick}>
      {text}  
    </button>
  </p>

const MasVotada = ({points, anecdotes}) => {
  const winningScore = Math.max(...points)
  let winningIndex = undefined;
  
  points.forEach((point, index) => {
    if(point===winningScore){
      if(!winningIndex) winningIndex = index;
    }
  })

  console.log({winningIndex})

  console.log("Anecdota ganadra: ", winningIndex)
  return ( 
  <p>{anecdotes[winningIndex]}</p>
  )
}

const App = (props) => {
  const maximo = 5, minimo = 0
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(maximo+1).fill(0)) //Asigno un estado como matriz
  
  const handleClickVote = () => {
    const copyPints = [...points]
    copyPints[selected] +=1
    setPoints(copyPints)
    console.log("Puntajes:", copyPints)
  }

  const handleClickSelected = () => setSelected(Math.round(Math.random() * ((maximo - minimo) + minimo)))
  console.log("Anecdota elegida: ",selected)

  return (
    <div>
      {props.anecdotes[selected]}
      <Button handleClick={handleClickVote} text="Votar"/>
      <Button handleClick={handleClickSelected} text="Proxima anécdota"/>
      <h1>Anecdota con mayoría de votos</h1>
      <MasVotada points={points} anecdotes={anecdotes}/>
    </div>
  )
}

const data = [
  {anecdota: 'hola', puntaje:0},
  {anecdota: 'hola1', puntaje:0},
  {anecdota: 'hola2', puntaje:0},
  {anecdota: 'hola3', puntaje:0},
]

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
