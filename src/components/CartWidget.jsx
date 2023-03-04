import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/ShoppingCartContext'
import Cart from '../assets/shoppingcart.png'
import '../styles/cartwidget.css'

const CartWidget = () => {
  const [cart] = useContext(CartContext)
  
  const quantity = cart.reduce((accumulator, currentValue)=> accumulator + currentValue.quantity,0) 
    
  return (
    <div className='cart-widget'>
      <Link to={'/cart'}> <img className='cart-widget-icon' 
        src={Cart} alt="Cart icon" /> </Link>
      <div className='cart-widget-div'>
        <span className='cart-widget-span'>{quantity}</span>
      </div>
    </div>
  )
}

export default CartWidget