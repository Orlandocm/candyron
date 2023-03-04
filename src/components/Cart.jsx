import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/ShoppingCartContext'
import CircleP from '../assets/icons/circulo-P.png'
import '../styles/cart.css'
import Form from './Form'

const Cart = () => {
  const [cart, setCart] = useContext(CartContext)
  
  const removeToCart = (productId) => {
    const itemFound = cart.find((product)=> product.id === productId)
    const index = cart.findIndex((index) => index === itemFound)
    const newCartItems = [...cart];
    newCartItems.splice(index, 1);
    setCart(newCartItems);
  }

  const clear = () => {
    const clearCart = []
    setCart(clearCart)
  }

  const subtotal = (product) => {
    const total = product.quantity * product.price;
    return total
  }


  // const totalToPay = (parcialTotal) => {
  //   total = parcialTotal ++
  //   return total
  // }

  return (
      <div className='cart-container'>
        <div className='cart-title'>
          <h1>CANDYRON</h1>
          <h2>SHOPPING CART</h2>
        </div>
        <div className='cart-subtitle'>
          <h2>My Cart</h2>
          <Link to={'/catalogue'} className='button' href="#">Continua Comprando</Link>
        </div>
        {cart.map((product)=>{
          return(
            <div key={product.id} className='cart-context'>
              <div className='context-title'>
                <h3>{product.title}</h3>
                <p>Cant: <span className='quantity'>{product.quantity}</span> x {product.price} €</p>
              </div>
              <div>
                <h2>{subtotal(product)}€</h2> 
              </div>
              <div>
              <button className='cart-btn' onClick={()=> removeToCart(product.id)}><img src={ CircleP } alt="icon" /></button>
              </div>
            </div>
          )
        })}
        <div className='line'></div>
        <div className='context-subtitle'>
          <div>
            <h2>Total:</h2>
          </div>
          <div>
            <h3>hola</h3>
          </div>
        </div>
        <div className='context-subtitle-btn' >
          <a className='button' onClick={()=> clear()}>Vaciar Carrito</a>
        </div>
          {!Cart ? <h1>Carrito Vacio</h1> : <Form />}
      </div>
  )
}

export default Cart