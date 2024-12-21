import { useState } from 'react'
import TimerLoader from '../components/TimerLoader'
import './pages-style/Timer.css'

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [time, setTime] = useState(0)
  const [timming, setTimming] = useState(false)

  const startTimer = () => {
    setTime(() => {
      let newTime = hours * 60 * 60 + minutes * 60 + seconds
      if(newTime === 0) {
        alert('Por favor, insira um tempo válido')
        return 0
      }
      setTimming(true)
      setHours(0)
      setMinutes(0)
      setSeconds(0)
      return newTime
    })
  }
  
  return(
    <div className="container" style={{ position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%', width: 'auto' }}>
      {timming ?
        <TimerLoader time={time} setTimingComponent={setTimming} setTimeComponent={setTime} />
        :
        <div className="set-time">
          <div className="input-container">
            <input 
              type="number" 
              id="hours" 
              max={99} 
              min={0} 
              onKeyDown={(e) => e.preventDefault()} 
              onChange={(e) => setHours(Number(e.target.value))}/>
            <input 
              type="number" 
              id="minutes" 
              max={59} 
              min={0} 
              onKeyDown={(e) => e.preventDefault()} 
              onChange={(e) => setMinutes(Number(e.target.value))}/>
            <input 
              type="number" 
              id="seconds" 
              max={59} 
              min={0} 
              onKeyDown={(e) => e.preventDefault()} 
              onChange={(e) => setSeconds(Number(e.target.value))}/>
          </div>
          <div className="button-container">
            <button onClick={startTimer}>Iniciar</button>
          </div>
        </div>
      }
      </div>
  )
}

export default Timer