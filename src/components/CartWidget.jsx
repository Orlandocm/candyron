import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../assets/shopping-cart.svg'
import '../styles/cartwidget.css'

const CartWidget = () => {
  return (
    <div className='cart-widget'>
      <Link to={'/cart'}> <img className='cart-widget-icon' 
        src={Cart} alt="Cart icon" /> </Link>
      <div className='cart-widget-div'>
        <span className='cart-widget-span'>5</span>
      </div>
    </div>
  )
}

export default CartWidget