import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('')
  const SubmitHandler = (elem) =>{
   elem.preventDefault()
   console.log('form Submitted by' ,title)
    settitle('')
  }
  return (
    <div>
    
        
      
    <form onSubmit={(elem)=>{
      SubmitHandler(elem)
    }} >

      <input
       type="text"
        placeholder='Enter Your Name' 
        value={title}
        onChange={(elem) => {settitle(elem.target.value)}}/>
      
      <button>Submit</button>
    </form>
    </div>
  )
}

export default App
