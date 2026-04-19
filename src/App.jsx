import { useEffect, useState } from 'react'
import './global.css'
import Header from './components/header/Header'
import MainValues from './components/main_content/MainValues'
function App() {

  const [eyeState, setEyeState] = useState(true)
  const [showTimer, setShowTimer] = useState(0)

  
  const updatingTimer = () => {
    useEffect(() => {
      setInterval(() => {
        const [timerHours, setTimerHours] = useState(0)
        const [timerMinutes, setTimerMinutes] = useState(0)
        const [timerSeconds, setTimerSeconds] = useState(0)

        const timerGetter = new Date()
        setTimerHours(timerGetter.getHours())
        setTimerMinutes(timerGetter.getMinutes())
        setTimerSeconds(timerGetter.getSeconds())

        setShowTimer(`${timerHours.toString().padStart('0', 2)}:${timerMinutes.toString().padStart('0', 2)}:${timerSeconds.toString().padStart('0', 2)}`)
      },1000)      
    }, [])
  }


  
  return (
    <>
    <Header eyeState={eyeState} setEyeState={setEyeState} />
    <MainValues eyeState={eyeState} />


    <footer>
      <section>
        <p>{showTimer}</p>
      </section>
      
    </footer>
    </>
  )
}

export default App
