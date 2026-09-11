import React from 'react'

const RightcardContent = (props) => {
  return (
    <div>
       <div className='absolute  p-5 flex flex-col justify-between top-0 left-0 h-full w-full '>
            <h2 className='bg-white rounded-full h-15 w-15 flex justify-center items-center text-xl'>{props.id+1}</h2>
            <div>
                <p className='text-xl text-white font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio harshit singh rautela.</p>
            <div className='flex justify-between'>
             <button className='bg-blue-600 text-white font-medium px-5 py-2 rounded-full text-lg'>{props.tag}</button>   
             <button className='bg-blue-600 text-white font-medium px-5 py-2 rounded-full text-lg'>   <i className="ri-arrow-right-up-line "></i> </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RightcardContent
