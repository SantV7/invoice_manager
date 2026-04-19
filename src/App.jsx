import { useEffect, useState } from 'react'
import './global.css'
import Header from './components/header/Header'
import MainValues from './components/main_content/MainValues'
function App() {

  const [eyeState, setEyeState] = useState(true)
  const [showTimer, setShowTimer] = useState('')

// Refazer o horário e a data (vc foi burro e falhou várias vezes)

useEffect(() => {

  function updateTime() {
    //  AGORA DEVO CRAIR A FUNÇÃO E SUAS FEATURES

    const timeGetter = new Date()
    const hours = timeGetter.getHours()
    const minutes = timeGetter.getMinutes()
    const seconds = timeGetter.getSeconds()
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
      </section>
      
    </footer>
    </>
  )
}

export default App
