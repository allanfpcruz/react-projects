import { useContext } from "react"
import { backgroundContext } from "../context/BackgroundContext"
import './pages-style/Background.css'

const Background = () => {
  const { changeBackground, setBackground } = useContext(backgroundContext)

  return(
    <div className="container" style={{ position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%', width: 'auto' }}>
      <button onClick={changeBackground}>Mudar Background</button>
      <button onClick={() => setBackground('#e4eafa')}>Resetar</button>
    </div>
  )
}

export default Background