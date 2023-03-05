import { Link } from 'react-router-dom'
import '../styles/item.css'

const ItemList = ({ id, price, title, url, button, stock, category }) => {
  return (
      <div className='list-container'>
      <picture>
      <img className='list-container-img' src={url} alt={title} />
      </picture>
      <div>
        <h2>{title}</h2>
        <p>Catergory: {category}</p>
        <p>Precio: {price} €</p>
        <p>stcok: {stock}</p>
      </div>
      <Link className='btn' to={`/item/${id}`}>{button}</Link>
      </div>
  )
}

export default ItemList
