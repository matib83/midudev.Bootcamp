import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  {anecdota: 'If it hurts, do it more often', puntaje:0},
  {anecdota: 'Adding manpower to a late software project makes it later!', puntaje:0},
  {anecdota: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', puntaje:0 },
  {anecdota: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', puntaje:0 },
  {anecdota: 'Premature optimization is the root of all evil.', puntaje:0 },
  {anecdota: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', puntaje:0}
]

const Button = ({handleClick, text}) => 
  <p>
    <button onClick={handleClick}>
      {text}  
    </button>
  </p>

const MasVotada = ({anecdotes}) => {
  const puntajes=anecdotes.map(anecdote=>anecdote.puntaje)
  console.log({puntajes})
  const winningScore = Math.max(...puntajes)
  console.log({winningScore})
  let winningIndex = 0;

  anecdotes.forEach((anecdote, index) => {
    if(anecdote.puntaje===winningScore){
      if(!winningIndex) winningIndex = index;
    }
  })
  console.log({winningIndex})
  console.log("Anecdota ganadra: ", anecdotes[winningIndex].anecdota)
  return ( 
  <p>{anecdotes[winningIndex].anecdota}</p>
  )
}

const App = (props) => {
  const MaxAnecdotasIndex = 5
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(anecdotes) //Asigno un estado como matriz
  
  const handleClickVote = () => {
    const copyPoints = [...points]
    copyPoints[selected].puntaje +=1
    setPoints(copyPoints)
    console.log("Puntajes:", copyPoints)
  }
  
  const handleClickSelected = () => setSelected(Math.round(Math.random()*MaxAnecdotasIndex))
  console.log("Anecdota elegida: ",selected)
  
  return (
    <div>
      {anecdotes[selected].anecdota}
      <Button handleClick={handleClickVote} text="Votar"/>
      <Button handleClick={handleClickSelected} text="Proxima anécdota"/>
      <h1>Anecdota con mayoría de votos</h1>
      <MasVotada anecdotes={anecdotes}/>
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
