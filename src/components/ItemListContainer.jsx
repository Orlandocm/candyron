import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../services/getProducts'
import ItemList from '../components/ItemList'
import Loader from './Loader'
import '../styles/itemlistcontainer.css'



const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(()=>{
    setTimeout(()=>{
      getProducts().then((products) => {
        setItems(products)
        setIsLoading(false)
      }) 
    },2000)
  },[]);

  const categoryFilter = items.filter((product) => product.category === categoryId);

  if (isLoading) return (
    <Loader/>
  );

  
  
  return (
    <div className='container'>
      <h1>Bienvenidos a Candyron</h1>
      <div className='container-item-list'>
      {categoryId ? <ItemList products={categoryFilter} /> : <ItemList products={items}/>} 
      </div>
    </div>
   )
}

export default ItemListContainer
