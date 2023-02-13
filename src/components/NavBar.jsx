import React from 'react'
import { Link } from 'react-router-dom'
import CartWidger from './CartWidget'
import Logo from '../assets/Logo.png'
import '../styles/navbar.css'

const NavBar = () => {
  const Categories = ['Pasteleria', 'Nosotros', 'Contacto'];
  return (
      <nav className='nav-container'> 
        <div>
          <Link to={`/`}><img className='nav-container-logo' src= { Logo } alt="Logo" /></Link>
          <h4>CANDYRON</h4>
        </div>
        <ul className='nav-container-list'>
          {Categories.map((items, list) => 
            <li className='nav-container-items' key={list}>
              <Link to={`/itemlist/${items}`} >{items}</Link>
            </li>
          )}
        </ul>
        <CartWidger/>
      </nav>
  
  )
}

export default NavBar