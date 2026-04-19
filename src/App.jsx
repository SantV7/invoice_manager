import { useEffect, useState } from 'react'
import './global.css'
import Header from './components/header/Header'
import MainValues from './components/main_content/MainValues'

function App() {

  const [eyeState, setEyeState] = useState(true)
  const [showTimer, setShowTimer] = useState('')
  const [dayInfo, setDayInfo] = useState('')



  useEffect(() => {
   const dayWeek = {
    0: 'Domingo',
    1: 'Segunda',
    2: 'Terça',
    3: 'Quarta',
    4: 'Quinta',
    5: 'Sexta',
    6: 'Sábado',
  }
    const now = new Date()
    const dayNow = dayWeek[now.getDay()]
    setDayInfo(dayNow)
  }, [])

useEffect(() => {
  function updateTime() {
    const timeGetter = new Date()
    const hours = timeGetter.getHours()
    const minutes = timeGetter.getMinutes()
    setShowTimer(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}h`)
  }

  const intervalTimer = setInterval(() => {
    (updateTime)
  }, 1000);

  return () => clearInterval(intervalTimer)
}, [])



  
  return (
    <>
    <Header eyeState={eyeState} setEyeState={setEyeState} />
    <MainValues eyeState={eyeState} />


    <footer>
      <section>
        <p>{showTimer}</p>
        <div>{dayInfo}</div>
      </section>
      
    </footer>
    </>
  )
}

export default App
