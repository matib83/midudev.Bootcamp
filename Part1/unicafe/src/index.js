import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button>GOOD</button>
      <button>NEUTRAL</button>
      <button>BAD</button>
      <h1>Statics</h1>
      <p>good: </p>
      <p>neutral: </p>
      <p>bad: </p>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)