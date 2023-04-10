import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>

      <nav className='main_nav'>
        <div className="logo">
          <h1>Space Tour</h1>
        </div>
        <div className='menu_nav'>
          <ul>
            <li className='li_nav'> <NavLink className="a_nav" to="/Home">Home</NavLink></li>
            <li className='li_nav'> <NavLink className="a_nav" to="/About">SignUp</NavLink></li>
            <li className='li_nav'> <NavLink className="a_nav" to="/Search">LogIn</NavLink></li>
          </ul>
        </div>
      </nav>

    </div>
  )
}



export default Navbar