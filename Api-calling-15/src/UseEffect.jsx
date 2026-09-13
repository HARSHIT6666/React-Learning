import React, { useState , useEffect } from 'react'
//the below case doesn't involve []dependency array so the useeffect will run for every state change
// const UseEffect = () => {
//     const [num, setnum] = useState(0)
//     useEffect(function(){
//         console.log('useEffect is running...')
//     })
//   return (
//     <div>
//         <h1>{num}</h1>
//       <button onClick={()=>{setnum(10)}}>Click</button>
//     </div>
//   )
// }


const UseEffect = ()=>{
    const [a, seta] = useState(0)
    const [b, setb] = useState(0)

    function achanging (){
        console.log('a ki value change ho gYI')
    }
    function bchanging (){
        console.log('b ki vlaue change ho gyi')
    }

        useEffect(function (){
            achanging()
            // console.log('useEffect is running..')
        } ,[a])

 
    return (
     <div>
        <h1>A is {a}</h1>
        <h1>B is {b}</h1>

      <button
      onClick={()=>{ seta(a+1)}}
      >A</button>

      <button
       onClick={()=>{setb(b-1) }}
       >B</button>

     </div>
    )
}

export default UseEffect
