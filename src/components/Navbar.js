import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import logo from "./logo.png"


const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between bg-black'>
        <NavLink to="/">
          <div>
          <img src={logo} className='h-[45px] w-[150px] p-1'/>
          </div>
        </NavLink>
       
        <div className='flex gap-3 '>
          <NavLink to="/">
          <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div>
            <FaShoppingCart/>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
