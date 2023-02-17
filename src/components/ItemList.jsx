import Item from './Item'
import '../styles/itemlist.css'


const ItemListContainer = ({ products }) => {
  return (
    <>
    {products?.map((item)=>{
        return (
          <Item
          key= {item.id} 
          title= {item.title} 
          id = {item.id}
          price= {item.price} 
          stock= {item.stock}
          category= {item.category}
          url= {item.pictureUrl}
          button= {'Mostrar Detalles'}
          />
        )
      })}
    </>
  )
}

export default ItemListContainer