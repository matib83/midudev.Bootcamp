import './App.css';
import Mensaje from './Mensaje.js'

const t = [1, -1, 3, 4]
const t1 = t.concat(5)
const m1 = t.map(value => value * 2)
const m2 = t.map(value => '<li>' + value + '</li>')
const [first, second, ...rest] = t

console.log(t)
console.log(t1)
console.log(m1)
console.log(m2)
console.log(first)
console.log(second)
console.log(rest)

t.forEach(value => {
  console.log (value) // se imprimen los números 1, -1, 3, 5, cada uno en la línea propia
})


const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}
 
  const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message='En un curso'/>
      <Mensaje message='de React'/>
      <Description/>
    </div>
  );
}

export default App;
