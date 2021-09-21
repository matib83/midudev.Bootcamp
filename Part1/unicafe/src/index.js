import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const Average = ({good, neutral, bad}) => {
  return (good || neutral || bad) ? (good-bad)/(good+neutral+bad) : 0
}

const Positivos = ({good, neutral, bad}) => {
  return (good || neutral || bad) ? ((good)/(good+neutral+bad)*100) : 0
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good+1)
    console.log(good)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral+1)
    console.log(neutral)
  }

  const handleClickBad = () => {
    setBad(bad+1)
    console.log(bad)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button 
        onClick={handleClickGood}
      >
        GOOD  
      </button>
      <button 
        onClick={handleClickNeutral}
      >
        NEUTRAL  
      </button>
      <button 
        onClick={handleClickBad}
      >
        BAD  
      </button>
      <h1>Statics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>Comentarios totales: {good+neutral+bad}</p>
      <p>Promedio: <Average good={good} neutral={neutral} bad={bad} /></p>
      <p>Positivos: <Positivos good={good} neutral={neutral} bad={bad} /> %</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)