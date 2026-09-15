import React from 'react'
import {useNavigate} from 'react-router-dom'
const Navbar2 = () => {
    const navigate =  useNavigate()
  return (
    <div className='flex px-5 py-2 bg-emerald-800'>
       <button
       onClick={()=>{navigate('/')}} className='bg-amber-500 py-2 px-5 rounded m-2 cursor-pointer active:scale-95'>
        Return To Home Page</button>
        

        <button
       onClick={()=>{navigate(-1)}} className='bg-amber-500 py-2 px-5 rounded m-2 cursor-pointer active:scale-95'>
        Back</button>

        <button
       onClick={()=>{navigate(+1)}} className='bg-amber-500 py-2 px-5 rounded m-2 cursor-pointer active:scale-95'>
        Next</button>
    </div>
  )
}

export default Navbar2
