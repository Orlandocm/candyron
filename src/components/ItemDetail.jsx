import ItemCount from './ItemCount'
import '../styles/itemdetail.css'

const ItemDetail = ({ detail }) => {
  return (
    <>
      <h1 className='detail-title'>Detalles del detailo</h1>
      <div className='detail-container'>
          <img className='detail-container-img' src= {detail.pictureUrl} alt="" />
          <div className='detail-container-info'>
            <div className='detail-container-description'>
              <h1>{detail.title}</h1>
              <p className='detail-description'>{detail.description}</p>
            </div>
            <div>
              <h3>Precio: {detail.price}€</h3>
              <p>Stock: {detail.stock}</p>
            </div>
            <ItemCount stock= {detail.stock}/>
            <button className='btn'>Añadir al carrito</button>
          </div>
      </div>
    </>
  )
}

export default ItemDetail
