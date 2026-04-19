import { useState } from 'react'
import './global.css'
import Header from './components/header/Header'
import MainValues from './components/main_content/MainValues'
function App() {

  const [eyeState, setEyeState] = useState(true)

  const [timerCounter, setTimerCounter] = useState(0)
  
  return (
    <>
    <Header eyeState={eyeState} setEyeState={setEyeState} />
    <MainValues eyeState={eyeState} />


    <footer>
      <section>
        <p>timeHour</p>
      </section>
      
    </footer>
    </>
  )
}

export default App
