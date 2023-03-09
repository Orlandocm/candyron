import { CartContext } from '../context/ShoppingCartContext'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { useContext } from 'react'
import { useState } from 'react'
import '../styles/form.css'


const Form = () => {
  const [orderId, setOrderId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [textArea, setTextArea] =  useState('')
  const [cart] = useContext(CartContext)

  const dataBase = getFirestore()

  const handleSubmit = (e) => {
    const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(email.test(validEmail)){
      e.preventDefault();
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    } else {
      alert("hola")
    }
    
    
  }

   const order = {
    cart,
    name,
    email,
    textArea,
  }

  const ordersCollection = collection(dataBase, "Order");

  return (
    <div className='container'>
      <div className="form-style-8">
        <h2>Enviar Orden</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" />
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          <textarea onChange={(e) => setTextArea(e.target.value)} placeholder="Message" />
          <input type="submit" disabled={""} value="Enviar Orden" />
        </form>
    </div>
    </div>
  )
}

export default Form
