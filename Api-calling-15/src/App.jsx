import React from 'react'

const App = () => {


  //promise{<pending>} the below code will provide me this output....

  //   function getData(){
  //  const response =   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //  console.log( response)
  // }
  

  //now i will get response{}...(respose Object)
  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  const getData = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response) //response dega => means json format mein response dega

    // console.log(response.json())
     // ye uss response ko  parse krega ,  javascript object mein but ye bhi ek asynchronous function hai ,output toh ye bhi promise{<pending>} dega , jaise ki without async await function ne dia,mtlb ki  directly console krke kuki fetch toh async hai....

    const data =  await response.json()
    console.log(data);
    //the above code now gives me the value fetch from the API
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
