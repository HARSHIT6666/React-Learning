import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users =[
    {
      img : 'https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro : '',
      tag : 'Underbanked'
    } 
  ,
   {
     img : 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      intro : '',
      tag : 'satisfied'
   } 
  ,
  {
     img : 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro : '',
      tag : 'Underserved'
  }
]
  return (
    <div >
      <Section1  users={users}/>
      <Section2 />
    </div>
  )
}

export default App
