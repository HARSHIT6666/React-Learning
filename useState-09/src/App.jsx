import React from 'react'
import { useState } from 'react'

// const App = () => {
// const [num, setnum] = useState(0)
// const [username, setusername] = useState('Harshit')
//   function ChangeNum(){
//     setnum(30)
//     setusername('sachin')
//   }
//   return (
//     <div>
//       <h1>the value of num is {num} <br /> value of name {username}</h1>
//       <button onClick={ChangeNum}>Click</button>
      
//     </div>
//   )
// }


const App = ()=>{
  const [num, setNum] = useState(0)
  
  function Increase(){
      setNum(num+1)  
  }
   if(num<0){
       setNum(0);
    }
  function Decrease(){
    setNum(num-1) 
  }
  return ( 
  <div>
     <h1>{num}</h1>
       <button onClick={Increase}>Increase</button>
       <button onClick={Decrease}>Decrease</button>
  </div>
  
  )
}
export default App
