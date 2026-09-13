import React from 'react'

const App = () => {
// const age =localStorage.getItem('age')
// const user = localStorage.getItem('user')
// console.log(user);
// console.log(age);

// const user1= {
//   username :'harshit',
//   age :18
// }
// localStorage.setItem('user1' ,JSON.stringify(user1))

const user1 =localStorage.getItem('user1')
console.log(typeof user1) //string we have to convert it into object which it is normal form
console.log(JSON.parse(user1));


  return (
    <div>
      
    </div>
  )
}

export default App
