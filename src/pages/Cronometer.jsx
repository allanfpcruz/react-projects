import { useState, useEffect, useRef } from "react"
import './pages-style/Cronometer.css'

function Cronometer() {
  const [timer, setTimer] = useState(0)
  const [isTimming, setIsTimming] = useState(false)
  const [isStopped, setIsStopped] = useState()
  let interval = useRef(null)

  useEffect(() => {
    if(isTimming) {
      interval.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 10);
    } else {
      clearInterval(interval.current);
    }
  }, [isTimming])
  
  const startTimer = () => {
    if (isTimming) return;
    setIsTimming(true);
    
  };
  
  const stopTimer = () => {
    if (!isTimming) return;
    setIsTimming(false);
    setIsStopped(true)
  };
  
  const resetTimer = () => {
    setIsTimming(false);
    setIsStopped(false)
    setTimer(0);
  };

  const formatTime = (timer) => {
    const minutes = Math.floor(timer / 6000).toString().padStart(2, "0");
    const seconds = Math.floor((timer / 100) % 60).toString().padStart(2, "0");
    const milliseconds = ((timer % 100)*10).toString().padStart(3, "0");
  
    return { minutes, seconds, milliseconds };
  };
  
  const { minutes, seconds, milliseconds } = formatTime(timer);

  return (
    <div className="container" style={{ position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%', width: 'auto', alignItems: 'center' }}>
      <h2>
        {minutes}<span>:</span>{seconds}<span>:</span><span className="milliseconds">{milliseconds}</span>
      </h2>
      {
      isTimming ?
        <div className="button-area timming">
          <button onClick={stopTimer}>Parar</button>
          <button onClick={resetTimer}>Restaurar</button>
        </div> 
        :
          isStopped ? 
          <div className="button-area not-timming paused">  
            <button onClick={startTimer}>Retomar</button>
            <button onClick={resetTimer}>Restaurar</button>
          </div>
          :
          <div className="button-area not-timming not-paused">
            <button onClick={startTimer}>Iniciar</button>
            <button onClick={resetTimer}>Restaurar</button>
          </div>
          }
      
    </div>
  )

}

export default Cronometer