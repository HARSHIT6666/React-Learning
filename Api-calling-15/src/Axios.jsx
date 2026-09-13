import React from 'react'
import axios from 'axios'

const Axios = () => {
    const getData = async ()=>{
      const response =   await axios.get('https://jsonplaceholder.typicode.com/todos/1' )
       console.log(response.data
        
       )

    }
  return (
    <div>
   <button onClick={getData}>Axios</button>
    </div>
  )
}

export default Axios
