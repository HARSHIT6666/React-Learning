import React from 'react'
import Navbar from './component/Navbar'
import Nav2 from './component/Nav2'
import { useState } from 'react'

const App = () => {
    const [Theme, setTheme] = useState('Light')


  return (
    <div>
      <Navbar Theme ={Theme} />
      
    </div>
  )
}

export default App
