import { useEffect } from 'react'
import { getProduct } from '../services/getProduct'

const ItemDetail = () => {
  const [product, setProduct] = useEffect([])
  useEffect(() => {
    getProduct().then((product) => setProduct(product))
  }, [])

  return (
    <>
      {product.map((product) => {
        return (
          <ItemDetail
            key= {product.id}
            id= {product.id}
            title= {product.title}
            description= {product.description}
            price= {product.price}
            stock= {product.stock}
            url={product.pictureUrl}
          />
        )
      })}
    </>
  )
}

export default ItemDetail
