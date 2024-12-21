import { useState } from "react"
import './pages-style/Counter.css'

function Counter() {
  const [count, setCount] = useState(0)
  const incrementar = () => {
    setCount(count + 1)
  }
  const decrementar = () => {
    if(count > 0) {
      setCount(count - 1)
    } else {
      alert("Impossível decrementar")
    }
  }
  return(
    <div className="container" style={{ position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%', width: 'auto' }}>
      <h1>Contador: <span>{count}</span></h1>
      <div className="button-container">
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
      </div>
    </div>
  )
}

export default Counter