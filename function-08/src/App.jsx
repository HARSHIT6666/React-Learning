import React from 'react'

// const App = () => {
//   const btnClicked =()=>{
//     console.log('btn is clicked')
//   }

//   const inputChanging = (val)=>{
//     console.log(val)
//   }

//   return (
//     <div>
//       <h1>Harshit</h1>
//       <button onClick={btnClicked} >Change User</button>
//       <button onClick={()=>{
//         console.log("explore this")
//       }}>Explore This</button>

//       <input  onClick={()=>{console.log('clicked on input')}} type="text" placeholder='Enter the name' />
//       <input onChange={()=>console.log('User is typing..')} type="text" placeholder='Enter the name' />

//       <input onChange={(elem)=>{
//         console.log(elem.target.value)
//         }} type="text" placeholder='Enter the Name' />


//         <input onChange={(elem)=>{
//           inputChanging(elem.target.value)
          
//         }} type="text" placeholder='this is what i have to learn' />

//     </div>
//   )
// }
  

const App =()=>{
  function buttonClick(elem){
    console.log(elem)
  }
  return(
<button onClick={()=>{
  buttonClick("hello")
}}>CLick</button>
  )
}

export default App
