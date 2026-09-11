import React from 'react'
import myimage from '../../assets/my.png'
import 'remixicon/fonts/remixicon.css'
import RightcardContent from './RightcardContent'

const RightCard = (props) => {
  return (
    <div className='h-full relative w-70 rounded-3xl shrink-0 overflow-hidden'>
        <img  className='h-full w-full object-cover' src={props.img}  alt="" />
       <RightcardContent  id={props.id} tag={props.tag} />
      
    </div>
  )
}

export default RightCard
