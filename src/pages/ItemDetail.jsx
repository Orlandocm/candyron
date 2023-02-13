import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/getProductById'
import Loader from '../components/Loader'
import ItemCount from '../components/ItemCount'
import '../styles/itemdetail.css'

function ItemDetail () {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { productId } = useParams()

  useEffect(() => {
    setTimeout(() => {
      getProductById(Number(productId)).then((item) => {
        setProduct(item)
        setIsLoading(false)
      })
    }, 500)
  }, [])

  if (isLoading) return (<Loader/>)
  
  return (
    <div className='detail-container'>
      <img className='detail-container-img' src={product.pictureUrl} alt="" />
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
  )
}

export default ItemDetail
