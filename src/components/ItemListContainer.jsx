import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ItemList from '../components/ItemList'
import Loader from './Loader'
import '../styles/itemlistcontainer.css'


const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    const dataBase = getFirestore()
    const itemsCollection = collection(dataBase, "Postres")
    getDocs(itemsCollection).then((snapshot) => {
      const document = snapshot.docs.map((products) =>({ ...products.data(), id: products.id}) )
      setItems(document)
      setIsLoading(false)
    })
  }, [])

  const filter = items.filter((product) => product.category === categoryId)
  
  if (isLoading) return (
    <Loader/>
  );

  return (
      <div className='container-item'>
        { categoryId ? <h1>{ categoryId }</h1> : <h1>{ greeting }</h1>}
        <div className='container-item-list'>
          { categoryId ? <ItemList products={filter} /> : <ItemList products={items} /> }
        </div>
    </div>
   )
}

export default  ItemListContainer
