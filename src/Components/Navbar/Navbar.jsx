import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './navbar.module.css'
export default function Navbar() {
  return <>
    <nav className={` ${style.bgNavbar} navbar navbar-expand-lg  container-fluid`}>
  <div className="container">
    <Link className="navbar-brand fw-bold fs-2 text-light" to={'/'}>START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse me-4" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 py-4">

        <li className="nav-item mx-2">
           
          <NavLink className="nav-link fw-bold text-light" to={'/About'}>ABOUT</NavLink>
        </li>      
          <li className="nav-item mx-2">
          <NavLink className="nav-link fw-bold text-light" to={'/Portfolio'}>PORTFOLIO</NavLink>
        </li>      
          <li className="nav-item mx-2">
          <NavLink className="nav-link fw-bold text-light" to={'/Contact'}>CONTACT</NavLink>
        </li>    
       
   

      </ul>
  
    </div>
  </div>
</nav>

  </>
}
