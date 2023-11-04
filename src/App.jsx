import { useState } from 'react'
import './index.css'
import Navbar from "./LandingPage/Navbar"
import Hero from "./LandingPage/Hero"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
    </>
  )
}

export default App
