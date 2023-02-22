import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../data/products.json'
import Loader from './Loader'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  const getProductDetail = () => {
    return new Promise ((resolve, reject)=> {
      Data.length === 0 ? reject(new Error("No hay producto")) : setTimeout(() =>{resolve(Data)},2000)
    })
  }

  async function fetchData() {
    setIsLoading(true)
    try{
      const detail = await getProductDetail();
      setProduct(detail.find((item)=> item.id === Number(id)))
      setIsLoading(false)
    } catch(err){
      console.log(err)
    }
  }
  
  useEffect(() => {
    fetchData()
  },[])

  if (isLoading) return (<Loader/>)
  
  return (
    <>
      <ItemDetail detail= {product} />
    </>  
  )
}

export default ItemDetailContainer
