import { useContext, useState } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import '../styles/itemcount.css'

const ItemCount = ({ item }) => {
  const [count, setCount] = useState(1)
  const [cart, setCart] = useContext(CartContext)

  const increment = () => {
    if(count === item.stock) return
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }
  
  const addToCart = (itemId) => {
      const itemFound = cart.find((product)=> product.id === itemId);

      if(itemFound){
        const newCart = cart.map((product)=>
          product.id === itemId ? {...product, quantity: Math.min(Math.max(product.quantity + count, 1) - product.quantity , item.stock)} : product
        )
        setCart(newCart)
      }else {
        const newProduct = {...item, quantity:count}
        setCart([...cart, newProduct])
      }
    }

  return (
      <div className='count-container'>
        <div>
          <button onClick={decrement}>-</button>
          <span>{count < 1 ? setCount(1) : count}</span>
          <button className= {count === item.stock ? 'not-allowed' :''} onClick={increment} >+</button>
        </div>
          <button onClick={()=> addToCart(item.id)} > Añadir al carrito </button>
      </div>
  )
}

export default ItemCount
