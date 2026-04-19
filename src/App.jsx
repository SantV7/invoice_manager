import { useEffect, useState } from 'react'
import './global.css'
import Header from './components/header/Header'
import MainValues from './components/main_content/MainValues'
import Footer from './components/footer/Footer'

function App() {

  const [eyeState, setEyeState] = useState(true)

  
  return (
    <>
    <Header eyeState={eyeState} setEyeState={setEyeState} />
    <MainValues eyeState={eyeState} />
    <Footer />

    </>
  )
}

export default App
