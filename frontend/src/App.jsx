import { useState } from 'react'
import Home from './assets/pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
