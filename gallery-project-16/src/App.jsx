import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  const [UserData, setUserData] = useState([])

  const getData = async()=>{
   const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
   setUserData(response.data)
   console.log(UserData)
  }

  let PrintUserData ="NO Data Available"
  if(UserData.length>0){
   PrintUserData = UserData.map((elem , idx )=>{
       return <div key={idx}>
       <a href={elem.url}>
         <div className='h-40 w-44 overflow-hidden bg-white'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
       </div>
       <h2 className='font-bold text-xl'>{elem.author}</h2>
       </a>
        </div>
   })
  }

  return (
   <div className='bg-black h-screen text-white overflow-auto'>
    <button 
    onClick={getData}
    className='bg-green-600 active:scale-95 mb-3 font-xl px-5 text-white py-2 m-4 rounded-2xl'>
      Get Data
    </button>
    <div className='flex flex-wrap gap-3' >
   {PrintUserData}
    </div>
   </div>
  )
}

export default App
