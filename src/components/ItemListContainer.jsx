import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Data from '../data/products.json'
import ItemList from '../components/ItemList'
import Loader from './Loader'
import '../styles/itemlistcontainer.css'


const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { categoryId } = useParams()

  const getProducts =  () => {
    return new Promise ((resolve , reject)=>{
      if ( Data.length === 0){
        reject(new Error("No hay Products"))
        setIsLoading(true)
      }
      setTimeout(()=> {
        resolve(Data)
      },2000)
    })
  }

  async function fetchData() {
    try{
      const data = await getProducts();
      setItems(data)
      setIsLoading(false)
    } catch (err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchData()
  },[categoryId]);

  if (isLoading) return (
    <Loader/>
  );

  const filter = Data.filter((products)=> products.category === categoryId)

  return (
      <div className='container-item'>
        { categoryId ? <h1>{ categoryId }</h1>  : <h1>{ greeting }</h1>}
        <div className='container-item-list'>
          { categoryId ? <ItemList products={filter} /> : <ItemList products={items} /> }
        </div>
    </div>
    
   
   )
}

export default  ItemListContainer
