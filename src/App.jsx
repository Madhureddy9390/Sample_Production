import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <p>How are you</p>
    <p>I am fine</p>
    <p>Checking whether it will automatically reflect on production</p>

    {/* Runtime error: trying to read property of undefined */}
    {undefined.name}
  </>
)

}

export default App
