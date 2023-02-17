import '../styles/cart.css'

const Cart = () => {
  return (
    <div className='container'>
      <h1>Candyron</h1>
      <form className='container-form' action="">
        <label htmlFor="">Nombre:</label>
        <input className='form-text' type="text" />
        <label htmlFor="">Email</label>
        <input className='form-text' type="text" />
        <label htmlFor="">Que quieres decirnos</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
      <button>Enviar</button>
    </div>
  )
}

export default Cart