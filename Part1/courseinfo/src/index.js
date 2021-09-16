import ReactDOM from 'react-dom'
import { useState } from 'react';
import './styles.css'

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
  
    return (
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>
          left
        </button>
        <button onClick={() => setRight(right + 1)}>
          right
        </button>
        {right}
      </div>
    )
  }

const rootElemnet = document.getElementById("root")
ReactDOM.render(<App />, rootElemnet)

