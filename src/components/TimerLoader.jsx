import { useEffect, useRef, useState } from 'react'

function TimerLoader(props) {
  let interval = useRef(null)
  const [isTimming, setIsTimming] = useState(true)
  const [time, setTime] = useState(props.time)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  const formatTime = (time) => {
    setHours(Math.floor(time / 3600).toString().padStart(2, '0'))
    setMinutes(Math.floor((time % 3600) / 60).toString().padStart(2, '0'))
    setSeconds()
    setSeconds((time % 60).toString().padStart(2, '0'))
    if(time === 0) {
      setTimeout(() => {
        setTimingComponent()
        setIsTimming(false)
        alert('O tempo acabou!!')
        return
      }, 1000);
    }
  }

  const toggleTiming = () => {
    isTimming ? setIsTimming(false) : setIsTimming(true)
  }

  const setTimingComponent = () => {
    setTime(0)
    props.setTimeComponent(0)
    props.setTimingComponent(false)
  }

  // useEffect(() => {
  //   setTime(props.time)
  // }, [])

  useEffect(() => {
    formatTime(time)
  }, [time])

  useEffect(() => {
    if(isTimming) {
      interval.current = setInterval(() => {
        setTime((prev) => prev - 1)
      }, 1000)
    } else {
      clearInterval(interval.current)
    }
  }, [isTimming])

  return(
    <div className="time">
      <div className="time-container">
      <h2>
        {hours}<span>:</span>{minutes}<span>:</span>{seconds}
      </h2>
      </div>
      <div className="button-container">
        {isTimming ?
          <button id="pause" onClick={toggleTiming}>Pausar</button>
          :
          <button onClick={toggleTiming}>Retomar</button>
        }
        <button id='delete' onClick={setTimingComponent}>Excluir</button>
      </div>
    </div>
  )
}

export default TimerLoader