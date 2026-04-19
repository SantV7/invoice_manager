import { useEffect, useState } from 'react'
import './global.css'
import Header from './components/header/Header'
import MainValues from './components/main_content/MainValues'
function App() {

  const [eyeState, setEyeState] = useState(true)
  const [showTimer, setShowTimer] = useState('')

// Refaer o horário e a data (  vc foi burro e falhou várias vezes)


  
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
