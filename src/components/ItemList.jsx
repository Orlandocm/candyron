import React  from 'react'
import { Link } from 'react-router-dom'
import '../styles/itemlist.css'

const ItemList = ({id,price, title, url, button, stock}) => {

  return (
    <div className='list-container'>
      <picture>
      <img className='list-container-img' src={url} alt="" />
      </picture>
      <div>
        <h2>{title}</h2>
        <p>Precio: {price} €</p>
        <p>stcok: {stock}</p>
      </div>
      <Link className='btn' to={`/details/${id}`}>{button}</Link>
    </div>
  )
}

export default ItemList