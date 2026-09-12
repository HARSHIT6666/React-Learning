import React from 'react'
import { useState } from 'react'

const App = () => {
  const [notes, setnotes] = useState('')
  const [description, setdescription] = useState('')

  const [task, settask] = useState([])

  const submitHandler = (elem ,desc ,note)=>{
    elem.preventDefault()

    const copyTask = [...task]
    copyTask.push({notes , description})
    settask(copyTask)

   console.log( notes )
   console.log( description )

   setnotes('')
   setdescription('')
  }
  return (
    <div className='h-screen gap-10  bg-black text-white lg:flex p-10'>
      <form onSubmit={(elem)=>{submitHandler(elem)}} className='flex lg:w-1/2 flex-col gap-5'>
        <h1 className='text-2xl font-bold'> Add Notes</h1>
        
          <input 
          value={notes}
          onChange={(note)=>{setnotes(note.target.value)}}
          className='px-5 w-full font-medium border-2 py-2 outline-none rounded-2xl'
           type="text" 
           placeholder='Enter Notes Heading' 
           />
      <textarea
       type="text" 
       value={description}
       onChange={(desc)=>{setdescription(desc.target.value)}}
       placeholder='Write Details' 
       className=' w-full h-32  font-medium   px-5 border-2 py-2 outline-none  rounded-2xl '
        />
      <button className='bg-white w-full outline-none   text-black px-5 py-2 rounded-2xl'>Add Button</button>
      </form>
      <div className=' bg-green-900  lg:w-1/2 border-l-5  p-10'>
      <h1 className='text-2xl font-bold'>Recent Notes</h1>

     <div className='flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto'>

     {/* no. of task i provide  , task.map() will run that number of times */}
      {task.map((elem, idx)=>{
        return <div className='h-52 bg-white w-40 rounded-2xl text-black p-4'>
          <h3 className='leading-snug text-xl font-bold' >{elem.notes}</h3>
          <p className='mt-2 leading-tight font-medium text-red-500'>{elem.description}</p>
        </div>
      })}

     
     
      
     </div>
      </div>
    </div>
  )
}

export default App
