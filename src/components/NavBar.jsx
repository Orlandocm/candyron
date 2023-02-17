import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidger from './CartWidget'
import Logo from '../assets/Logo.png'
import '../styles/navbar.css'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="nav-bar">
        <div className="brand">
          <Link to={`/`}><img className='nav-container-logo' src= { Logo } alt="Logo" /></Link>
          <h4>CANDYRON</h4>
        </div>
        <nav>
          <ul className="nav-list">
            <li><Link to={'/catalogue' }>Catalogo</Link></li>
            <li><a onClick={()=> setOpen(!open)}>Categorias ▼</a>
              {open &&
                <ul className="nav-dropdown">
                  <li><Link to= {`/category/${"cupcakes"}`}>Cupcakes</Link></li>
                  <li><Link to= {`/category/${"cokies"}`}>Cokies</Link></li>
                  <li><Link to= {`/category/${"macarrons"}`} >Macarros</Link></li>
                </ul>
             }
            </li>
            <li><Link to={'/404'}>About</Link></li>
          </ul>
        </nav>
        <CartWidger/>
    </div>
  )
}

export default NavBar