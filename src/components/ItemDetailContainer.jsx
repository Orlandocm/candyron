import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/getProductById'
import Loader from './Loader'
import ItemCount from './ItemCount'
import '../styles/itemdetail.css'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    setTimeout(() => {
      getProductById(Number(id)).then((item) => {
        setProduct(item)
        setIsLoading(false)
      })
    }, 500)
  }, [])

  if (isLoading) return (<Loader/>)

  return (
    <>
      <h1 className='detail-title'>Detalles del Producto</h1>
      <div className='detail-container'>
      <img className='detail-container-img' src= {product.pictureUrl} alt="" />
      <div className='detail-container-info'>
        <div className='detail-container-description'>
          <h1>{product.title}</h1>
          <p className='detail-description'>{product.description}</p>
        </div>
        <div>
          <h3>Precio: {product.price}€</h3>
          <p>Stock: {product.stock}</p>
        </div>
        <ItemCount stock= {product.stock}/>
        <button className='btn'>Añadir al carrito</button>
      </div>
    </div> 
    </>  
  )
}

export default ItemDetailContainer
