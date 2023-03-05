import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc, getFirestore} from 'firebase/firestore'
import Loader from './Loader'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const dataBase = getFirestore()

    const oneProduct = doc(dataBase, 'Postres', `${id}`)
    getDoc(oneProduct).then((snapshot) => {
      if (snapshot.exists()){
        const docs = snapshot.data();
        setItem({ ...snapshot.data(), id: snapshot.id })
        setIsLoading(false)
      }
    })
  }, [id])
  
  if (isLoading) return (<Loader/>)
  
  return (
    
     <ItemDetail detail= {item} />  
  )
}

export default ItemDetailContainer
