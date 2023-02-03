import React from 'react'
import '../styles/itemlistcontainer.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <section className='item-container'>
      <h2 className='item-container-title'>
        {greeting}
      </h2>
    </section>
  )
}

export default ItemListContainer