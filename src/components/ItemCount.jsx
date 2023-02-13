import { useState } from 'react'
import '../styles/itemcount.css'

const ItemCount = ({stock}) => {
  const [count, setCount] = useState(0)
  count > stock && setCount(stock);
  return (
    <div>
      <button onClick={ () => (setCount(count - 1))}>-</button>
      <span>{count < 0 ? setCount(0) : count}</span>
      <button className= {count === stock ? 'not-allowed' :''} onClick={() => (setCount(count + 1))} >+</button>
    </div>
  )
}

export default ItemCount
// count === stock && 'not-allowed' funciona pero da error.