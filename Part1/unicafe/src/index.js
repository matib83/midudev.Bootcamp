import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const Button = ({handleClickGood, text}) => 
  <button onClick={handleClickGood}>
    {text}  
  </button>

const Statics = ({text, value}) => {
  return (
    <table>
        <tbody>
          <tr>
            <td>{text}:</td>
            <td>{value}</td>
          </tr>
        </tbody> 
      </table>
  )
}

const Total = ({good, neutral, bad}) => 
  <p>Comentarios: {good+neutral+bad} </p>

const Average = ({good, neutral, bad}) =>
  <p>Promedio: {((good-bad)/(good+neutral+bad)).toFixed(2)} </p>

const Positivos = ({good, neutral, bad}) => 
  <p>Positivos: {((good)/(good+neutral+bad)*100).toFixed(2)} %</p>

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
      
      <Statics text="good" value={good} />
      <Statics text="neutral" value={neutral} />
      <Statics text="bad" value={bad} />
      <br></br>
      {(good || neutral || bad) ? 
        <>
          <Total good={good} neutral={neutral} bad={bad} />
          <Average good={good} neutral={neutral} bad={bad} />
          <Positivos good={good} neutral={neutral} bad={bad} />
        </>
        :
        <SinFeedback/>
      }
      <table>
        <tbody>
          <tr>
            <td>Dato1: </td>
            <td>VALOR_1</td>
          </tr>
          <tr>
            <td>Dato2: </td>
            <td>VALOR_2</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

ReactDOM.render(<App />, 
document.getElementById('root')
)