import { Link, NavLink } from 'react-router-dom'

import './navbar.css'
import logo from '../images/logo.png'
import React from 'react'

import { links } from '../data'

import { GoThreeBars } from "react-icons/go";
import { HiOutlineX } from "react-icons/hi";

import { useState } from 'react';


const Navbar = () => {
  let activeClassName = "nav-active";

  const [list, setList] = useState(false)

  return (
    <nav className='m-navbar'>
      <div className="container">
        <Link to='/' className="logo">
          <div onClick={() => setList(false)} className='logo-image'>
            <img src={logo} alt='Nea Logo'/>
          </div>
        </Link>
        <ul className={`nav__links ${list ? 'show__list' : 'hide__list'}`}>
          {links.map(({name, path}, index) => {
            return (
              <li key={index} >
                <NavLink onClick={() => setList(false)} to={path} className={({ isActive }) =>
                    isActive ? activeClassName : ""}>
                  {name} 
                </NavLink>
              </li>
            )
          })}
        </ul>
        <div className="button">
          <button onClick={() => setList(!list)} className='nav__togle-btn'>
            {list ? <HiOutlineX id='hamber'/> : <GoThreeBars id='hamber'/>}
          </button>
        </div>
      </div>
    </nav>
  )
}


export default Navbar

