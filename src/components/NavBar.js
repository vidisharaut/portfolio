import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Projects'>Projects</Link>
    </div>
  )
}

export default NavBar