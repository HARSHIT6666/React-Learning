import React from 'react'

const Navbar = (props) => {
  console.log(props);
  
  return (
    <div>

    <button
     onClick={()=>{
        props.setTheme('Light')
    }}>Change Theme
    </button>
    
    </div>
  )
}

export default Navbar
