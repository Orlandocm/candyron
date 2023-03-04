import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidger from './CartWidget'
import Logo from '../assets/Logo.png'
import '../styles/navbar.css'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='nav-container'>
      <div className='navbar-start'>
        <Link to={`/`}><img className='navbar-logo' src= { Logo } alt="Logo" /></Link>
        <h3>Candyron</h3>
     </div>
     <div>
        <ul className="nav-list">
          <li><Link to={'/catalogue' } className='navbtn'>Catalogo</Link></li>
          <li><a className='navbtn' onClick={()=> setOpen(!open)}>Categorias ▼</a>
           {open &&
              <ul className="nav-dropdown">
                <li className='navbtn-drop'><Link to= {`/category/${"cupcakes"}`} className='navbtn '>Cupcakes</Link></li>
                 <li className='navbtn-drop'><Link to= {`/category/${"cokies"}`} className='navbtn'>Cokies</Link></li>
                <li ><Link to= {`/category/${"macarrons"}`} className='navbtn' >Macarros</Link></li>
              </ul>
            }
          </li>
          <li><Link to={'/404'} className='navbtn'>About</Link></li>
        </ul>
      </div>
      <CartWidger/>
    </nav>
  )
}

export default NavBar