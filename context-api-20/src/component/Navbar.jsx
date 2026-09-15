import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'


const Navbar = (props) => {
 const data = useContext(ThemeDataContext)

  return (
    <div className='nav'>
      <h1>{data}</h1>
      <Nav2 Theme={props.Theme}  />
    </div>
  )
}

export default Navbar
