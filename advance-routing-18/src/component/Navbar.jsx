import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between py-4 px-8 bg-cyan-900 item-center'>
      <h2 className='text-2xl font-bold'>Harshit Singh Rautela</h2>
      <div className='flex gap-8'>

        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
        <Link to='/About'>About</Link>
        <Link to='/courses'>Courses</Link>
        {/* <a className='text-xl font-medium' href="/">Home</a>
        <a className='text-xl font-medium' href="/about">About</a>
        <a className='text-xl font-medium' href="/contact">Contact</a> */}
      </div>
    </div>
  )
}

export default Navbar
