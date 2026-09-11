import React from 'react'
import CenterLeftcontent from './CenterLeftcontent'
import CenterRightcontent from './CenterRightcontent'
const Center = (props) => {
  return (
    <div className='py-10 flex gap-10 items-center px-18 h-[90vh]'>
     <CenterLeftcontent />
     <CenterRightcontent users={props.users}/>
    </div>
  )
}

export default Center
