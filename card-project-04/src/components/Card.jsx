import React from 'react'
import {Bookmark} from 'lucide-react'
import amazon from '../assets/amazon.webp'

const Card = (props) => {
  console.log(props.companyName)
  return (
 
    <div className="card">

          <div>
            <div className='top'>
                <img src={props.brandlogo} alt="" />
                <button>SAVE <Bookmark size={15}/></button>
          </div>

          <div className='center'>
              <h3>{props.companyName} <span>{props.datePosted}</span></h3>
              <h2>{props.post}</h2>

              <div className='tag'>
              <h4>{props.postTag1}</h4>
              <h4>{props.postTag2}</h4>
              </div>

          </div>
          </div>

          <div className="bottom">
               <div>
                 <h3>{props.pay}</h3>
               <p>{props.location}</p>         
               </div>
          <button>Apply Now</button>

       </div>      
      </div>
  )
}

export default Card
