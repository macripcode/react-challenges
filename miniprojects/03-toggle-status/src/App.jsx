import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [status, setStatus] = useState('online')

  function handleButton(){
    setStatus(prev => prev === 'online' ? 'away' : 'online')
    setCount( prev => prev + 1)
  }

  return (
    <div>
      <button onClick={handleButton}>{status}</button>
      <p>you have change your state {count} times</p>
    </div>
  )
}

export default App
