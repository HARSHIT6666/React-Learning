import React from 'react'
import { useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState(10)
//   const btnClicked = ()=>{
//     console.log(num) 
//     setnum (num+1)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>Click</button>
     
//     </div>
//   )
// }



const App =() =>{
  const [num , setnum] = useState({user : 'Harshit' , age :20 })
  const BtnClicked = ()=>{
     const newnum = {...num}
     newnum.user = "aman"
     setnum(newnum)
  }
  return (
    <div>
        <h1>{num.user} ,{num.age}</h1>
        <button onClick={BtnClicked}>Click</button>
    </div>
 
  )
}
export default App
