import React from 'react'
import Card from './component/card'
import Navbar from './component/Navbar'

const App = () => {
  const user ="harshit"
  const age = 21
  return (
    <div >
     
      <Navbar />
      <Navbar />
       <h1>hello ,{user}</h1>
      <h1>i am {age} year old</h1>
      <Card  />
      <Card />
      <Card />

    </div>
  )

}

export default App
