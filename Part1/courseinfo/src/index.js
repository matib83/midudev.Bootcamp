import ReactDOM from 'react-dom'
import { useState } from 'react';
import './styles.css'

const App = () => {
  //const [left, setLeft] = useState(0)
  //const [right, setRight] = useState(0)
  const [clics, setClics] = useState({
    left: 0,
    right: 0
  })

  const handleClickLeft = () => {
    setClics({
      left: clics.left +1,
      right: clics.right
    })
  }

  const handleClickRight = () => {
    setClics({
      left: clics.left,
      right: clics.right + 1
    })
  }

  return (
    <div>
      {clics.left}
      <button onClick={handleClickLeft}>
        left
      </button>
      <button onClick={handleClickRight}>
        right
      </button>
      {clics.right}
    </div>
  )
}

const rootElemnet = document.getElementById("root")
ReactDOM.render(<App />, rootElemnet)

