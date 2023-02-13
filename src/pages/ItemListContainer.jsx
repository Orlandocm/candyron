import '../styles/itemlistcontainer.css'
import Item from '../components/Item'

const ItemListContainer = ({ greeting }) => {
  return (
    <>
    <div className='item-lis-container'>
      <h2 className='item-container-title'> {greeting} </h2>
      <section className='item-container'>
        <Item/>
      </section>
    </div>
    </>
  )
}

export default ItemListContainer