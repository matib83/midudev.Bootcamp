import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const Average = ({good, neutral, bad}) => {
  return <p>Promedio: {(good-bad)/(good+neutral+bad)} </p>
}

const Positivos = ({good, neutral, bad}) => {
  return <p>Positivos: {(good)/(good+neutral+bad)*100} %</p>
}

const SinFeedback = () => <p>Aun no hay feedback para mostrar</p> 

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
      {(good || neutral || bad) ? 
        <>
          <p>Comentarios totales: {good+neutral+bad}</p>
          <Average good={good} neutral={neutral} bad={bad} />
          <Positivos good={good} neutral={neutral} bad={bad} />
        </>
        :
        <SinFeedback/>
      }

    </div>
  )
}

ReactDOM.render(<App />, 
document.getElementById('root')
)