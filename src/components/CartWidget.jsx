import React from 'react'
import Cart from '../assets/shopping-cart.svg'
import '../styles/cartwidget.css'

const CartWidget = () => {
  return (
    <div className='cart-widget'>
      <img className='cart-widget-icon' 
        src={Cart} alt="Cart icon" 
      />
      <div className='cart-widget-div'>
        <span className='cart-widget-span'>5</span>
      </div>
    </div>
  )
}

export default CartWidget