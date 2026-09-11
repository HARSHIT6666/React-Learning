import React from 'react'
import myimage from "../assets/my.png"

const Card = (props) => {
  console.log(props)

  return (
        <div className='Card'>
              <img src={myimage} alt=""  />
                <h1>{props.user} , {props.age} </h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <button>View ME</button>
            </div>
    
  )
}

export default Card
