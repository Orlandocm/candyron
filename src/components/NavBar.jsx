import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidger from './CartWidget'
import Logo from '../assets/Logo.png'
import '../styles/navbar.css'

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const Dropdown = () => {
    setIsOpen(!isOpen);
  };

  const DropdownMobile = () => {
    setIsOpenMobile(!isOpenMobile);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  window.addEventListener("resize", handleResize);
  return (

    <nav className="navbar">
      <div className='navbar-brand'>
        <Link to={`/`}><img className='navbar-logo' src= { Logo } alt="Logo" /></Link>
        {/* <h3>CANDYRON</h3> */}
      </div>
      {isMobile ? (
        <button className="navbar-toggle" onClick={toggleDropdown}>
          <span className="navbar-toggle-icon">&#9776;</span>
        </button>
      ) : (
        <ul className="navbar-list">
          <li className="navbar-dropdown-item"> <Link to={'/'}>Inicio</Link></li>
          <li className='navbar-dropdown-item'><Link to={'/catalogue'} >Catalogo</Link></li>
          <li className="navbar-dropdown-item" onClick={Dropdown} ><a>Categorias</a>
            {
              !isOpen && (
                <ul className="navbar-dropdown">
                  <li className='navbar-dropdown-item'><Link to= {`/category/${"Cupcakes"}`}>Cupcakes</Link></li>
                  <li className='navbar-dropdown-item'><Link to= {`/category/${"Cookies"}`}>Cookies</Link></li>
                  <li className='navbar-dropdown-item' ><Link to= {`/category/${"Macarrons"}`} >Macarros</Link></li>
                </ul>
              )
            }
          </li>
        </ul>
      )}
      {showDropdown && isMobile && (
        <ul className="navbar-dropdown">
          <li className="navbar-dropdown-item"> <Link to={'/'}>Inicio</Link></li>
          <li className="navbar-dropdown-item" onClick={DropdownMobile} >Categorias
            <ul className="nav-dropdown">
            {
              !isOpenMobile && (
                <ul className="navbar-dropdown">
                  <li className='navbar-dropdown-item'><Link to= {`/category/${"Cupcakes"}`}>Cupcakes</Link></li>
                  <li className='navbar-dropdown-item'><Link to= {`/category/${"Cookies"}`}>Cookies</Link></li>
                  <li ><Link to= {`/category/${"Macarrons"}`} className='navbar-dropdown-item'>Macarros</Link></li>
                </ul>
              )
            }
            </ul>
          </li>
        </ul>
      )}
      <CartWidger />
    </nav>
  )
}

export default NavBar