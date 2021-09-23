import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const Button = ({handleClickGood, text}) => 
  <button onClick={handleClickGood}>
    {text}  
  </button>

const Statics = ({text, value}) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  )
}

const Total = ({good, neutral, bad}) => {
  return (
    <tr>
      <td>Comentarios:</td>
      <td>{good+neutral+bad}</td>
    </tr>
  )
}

const Average = ({good, neutral, bad}) => {
  return (
    <tr>
      <td>Promedio:</td>
      <td>{((good-bad)/(good+neutral+bad)).toFixed(2)}</td>
    </tr>
  )
}

const Positivos = ({good, neutral, bad}) => {
  return (
    <tr>
      <td>Positivos:</td>
      <td>{((good)/(good+neutral+bad)*100).toFixed(2)} %</td>
    </tr>
  )
}

const SinFeedback = () => <p>Aun no hay feedback para mostrar</p> 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => setGood(good+1)

  const handleClickNeutral = () => setNeutral(neutral+1)

  const handleClickBad = () => setBad(bad+1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClickGood={handleClickGood} text="GOOD"/>
      <Button handleClickGood={handleClickNeutral} text="NEUTRAL"/>
      <Button handleClickGood={handleClickBad} text="BAD"/>
      <h1>Estadísticas</h1>
      <table>
        <tbody>
          <Statics text="good" value={good} />
          <Statics text="neutral" value={neutral} />
          <Statics text="bad" value={bad} />
        </tbody> 
      </table>
      <br></br>
      {(good || neutral || bad) ? 
        <table>
          <tbody>
            <Total good={good} neutral={neutral} bad={bad} />
            <Average good={good} neutral={neutral} bad={bad} />
            <Positivos good={good} neutral={neutral} bad={bad} />
          </tbody>
        </table>
        :
        <SinFeedback/>
      }
    </div>
  )
}

ReactDOM.render(<App />, 
document.getElementById('root')
)