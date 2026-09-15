import React from 'react'
import Navbar from './component/Navbar'
import { useState } from 'react'



const App = () => {
  const [Theme, setTheme] = useState('Dark')
  return (
    <div>
      <h1>Harshit</h1>
      <h1>Theme is {Theme}</h1>
      <Navbar Theme={Theme} setTheme={setTheme} />
    </div>
  )
}

export default App
