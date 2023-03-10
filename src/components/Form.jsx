import { CartContext } from '../context/ShoppingCartContext'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { useContext } from 'react'
import { useState } from 'react'
import '../styles/form.css'


const Form = () => {
  const [orderId, setOrderId] = useState('')
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [textArea, setTextArea] =  useState('')
  const [textAreaError, setTextAreaError] = useState('')
  const [cart, setCart] = useContext(CartContext)

  const dataBase = getFirestore()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
      setCart([])
    }
  }

  const order = {
    cart,
    name,
    email,
    textArea,
  }

  const ordersCollection = collection(dataBase, "Order");

  const validateForm = () => {
    let isValid = true;

    if (!name) {
      isValid = false;
      setNameError('Por favor ingrese su nombre');
    } else {
      setNameError('');
    }

    if (!email) {
      isValid = false;
      setEmailError('Por favor ingrese su correo electrónico');
    } else if (!isValidEmail(email)) {
      isValid = false;
      setEmailError('Por favor ingrese un correo electrónico válido');
    } else {
      setEmailError('');
    }

    if (!textArea) {
      isValid = false;
      setTextAreaError('Por favor ingrese su mensaje');
    } else {
      setTextAreaError('');
    }

    return isValid;
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className='container'>
      <div className="form-style-8">
        <h2>Enviar Orden</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" />
          {nameError && <div className="error-message">{nameError}</div>}
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          {emailError && <div className="error-message">{emailError}</div>}
          <textarea onChange={(e) => setTextArea(e.target.value)} placeholder="Message" />
          {textAreaError && <div className="error-message">{textAreaError}</div>}
          <input type="submit" value="Enviar Orden" />
        </form>
      </div>
    </div>
  )
}

export default Form
