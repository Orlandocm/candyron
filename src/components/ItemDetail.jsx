import ItemCount from './ItemCount'
import '../styles/itemdetail.css'

const ItemDetail = ({ detail }) => {
  return (
    <div className='detail-container'>
      <h1>Detalles del producto</h1>
      <div className='detail-container-context'>
          <img className='detail-container-img' src= {detail.pictureUrl} alt={detail.title} />
          <div className='detail-container-info'>
            <div className='detail-container-description'>
              <h1>{detail.title}</h1>
              <p className='detail-description'>{detail.description}</p>
            </div>
            <div>
              <h3>Precio: {detail.price}€</h3>
              <p>Stock: {detail.stock}</p>
            </div>
            <ItemCount item = {detail}
            />
          </div>
      </div>
    </div>
  )
}

export default ItemDetail
