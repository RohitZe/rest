import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>cnt+</h2>
    <Button/>
    </>
    
  )
}

export default App
