import React from 'react'
import Card from './components/Card'
import User from './components/User'
import myntra from './assets/myntra_logo.webp'
import amazon from './assets/amazon.webp'

// 1st thing i learn during this...

//  const App = () => {
 
//   const arr = [10,20, 30 ,40];

//   const arrofobj = [
//     {
//       user : "harshit",
//       age:20
//     },
//      {
//       user :"harsh" ,
//       age:23
//      },
//      {
//       user : "sachin",
//       age:25
//      }
//   ];
//   arrofobj.map((elem)=>{console.log(elem)})
//     arrofobj.map((elem)=>{console.log(elem.user)})

//   return (
//     <div className='parent'>
  
//       <User name = 'Harshit' arrElement ={arr[0]} /> 
//       {/* output for above one is hello , Harshit , 10 */}
//       <User name = 'Sachin'  arrElement ={arr[1]} />   
//       {/* output for above one is hello , Sachin , 20 */}


//      {arr.map(()=>{return 10})} 
//      {/* 10101010  means no. of times loop run it will show the result*/}

//      {arr.map(()=>{return <h1>10</h1>})} 
//      {/* 10 10 10 10 */}

//      {arr.map((elem)=>{return <h1>{elem}</h1>})}
//      {/* 10 20 30 40 */}

   
//     </div>
//     )
// }



//2nd thing i learn during this

// function App(){
//   const arr = [10,20,30]
//   return(

//     <div className='parent'>
//     {/* map is actually a loop .it will print user n 3times */}
//    {arr.map((elem)=>{
//     return <User arrElement={elem}/>
//    })}
//    </div>

//   ) 
// }

function App(){
  const jobsOpening = [
  {
    brandlogo: amazon,
    name: "Amazon",
    datePosted: "2 days ago",
    post : "Cloud solution",
    postTag1: "Full Time",
    postTag2: "Senior Level",
    pay: "$58/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: myntra,
    name: "Myntra",
    datePosted: "5 days ago",
    post : "Software developer",
    postTag1: "Full Time",
    postTag2: "Junior Level",
    pay: "$42/hour",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "1 week ago",
    post : "Backend Developer",
    post : "Data solution",
    postTag1: "Full Time",
    postTag2: "Mid Level",
    pay: "$45/hour",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "1 week ago",
    post : "Data scientist",
    postTag1: "Part Time",
    postTag2: "Junior Level",
    pay: "$38/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "2 weeks ago",
    post : "Cloud Developer",
    postTag1: "Full Time",
    postTag2: "Senior Level",
    pay: "$65/hour",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/google.com",
    name: "Google",
    datePosted: "2 weeks ago",
    post : "Business solution",
    postTag1: "Part Time",
    postTag2: "Mid Level",
    pay: "$50/hour",
    location: "Delhi, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    datePosted: "3 weeks ago",
    post : "frontEnd Developer",
    postTag1: "Full Time",
    postTag2: "Mid Level",
    pay: "$52/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "3 weeks ago",
    post : "Data scientist",
    postTag1: "Part Time",
    postTag2: "Junior Level",
    pay: "$35/hour",
    location: "Pune, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "1 month ago",
    post : "Backend Developer",
    postTag1: "Full Time",
    postTag2: "Senior Level",
    pay: "$60/hour",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "1 month ago",
    post : "frontEnd Developer",
    postTag1: "Full Time",
    postTag2: "Mid Level",
    pay: "$55/hour",
    location: "Mumbai, India"
  }
];

  return (
    <div className='parent'>
      {jobsOpening.map((elem ,idx)=>{
         return <div key={idx}>
          <Card companyName = {elem.name} post = {elem.post} datePosted ={elem.datePosted} postTag1 ={elem.postTag1} postTag2={elem.postTag2} pay={elem.pay} location={elem.location} brandlogo ={elem.brandlogo}/>
          </div>
      })} 
    </div>


  )
}
 

export default App
