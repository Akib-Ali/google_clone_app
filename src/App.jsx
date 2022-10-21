import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { GoogleMain } from './component/googlemain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GoogleMain/>
    </div>
  )
}

export default App
