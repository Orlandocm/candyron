import React, {useState, useEffect} from 'react'
import { getProducts } from '../services/getProducts'
import ItemList from './ItemList'
import Loader from './Loader'
import '../styles/item.css'


const Item = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      getProducts().then((products) => {
        setItems(products)
        setIsLoading(false)
      }) 
    },2000)
  },[]);

  if (isLoading) return (
    <Loader/>
  );
    
  return (
    <div className='item-container'>
      {items.map((item)=>{
        return (
          <ItemList 
          key= {item.id} 
          title= {item.title} 
          id = {item.id}
          price= {item.price} 
          stock= {item.stock}
          url= {item.pictureUrl}
          button= {'Mostrar Detalles'}
          />
        )
      })}
    </div>
   )
}

export default Item
