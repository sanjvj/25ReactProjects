import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './Components/Accordian'
import RandomColor from './Components/RandomColor'
import StarRating from './Components/StarRating'

function App() {
  

  return (
    <>
      <Accordian></Accordian>
      <RandomColor></RandomColor>
      <StarRating numStars={10}></StarRating>
    </>
  )
}

export default App
