import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2 className='logo'>My Blogs</h2>
        <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
        </div>
    </nav>
  )
}

export default Navbar;