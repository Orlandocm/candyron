import { CartContext } from '../context/ShoppingCartContext'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { useContext } from 'react'
import { useState } from 'react'
import '../styles/form.css'


const SendOrder = () => {
  const [orderId, setOrderId] = useState('')
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [textArea, setTextArea] =  useState('')
  const [textAreaError, setTextAreaError] = useState('')
  const [emailConfirmation, setEmailConfirmation] = useState('')
  const [emailConfirmationError, setEmailConfirmationError] = useState('')
  const [isValid, setIsValid] = useState(false);
  const [cart, setCart] = useContext(CartContext)

  const dataBase = getFirestore()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
      setEmailConfirmation('')
      setCart([{"quantity": 0, "price": 0, "id": 0}])
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
      isValid 
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

    if (!emailConfirmation) {
      isValid = false;
      setEmailConfirmationError('Por favor, confirme su correo electrónico');
    } else if (email !== emailConfirmation) {
      isValid = false;
      setEmailConfirmationError('Los correos electrónicos no coinciden');
    } else {
      setEmailConfirmationError('');
    }

    if (!textArea) {
      isValid = false;
      setTextAreaError('Por favor ingrese su mensaje');
    } else {
      setTextAreaError('');
    }

    setIsValid(isValid);

    return isValid;
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  return (
    <div className='container'>
      
      <div className="form-style-8">
      {orderId.length ? 
      <>
        <h2>Garcias por su compra</h2> 
        <p>Su orden Id: <h3>{orderId}</h3></p> 
      </> :
      <>
        <h2>Enviar Orden</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" />
          {nameError && <div className="error-message">{nameError}</div>}
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          {emailError && <div className="error-message">{emailError}</div>}
          <input onChange={(e) => setEmailConfirmation(e.target.value)} type="email" placeholder="Confirm Email" />
          {emailConfirmationError && <div className="error-message">{emailConfirmationError}</div>}
          <textarea onChange={(e) => setTextArea(e.target.value)} placeholder="Message" />
          {textAreaError && <div className="error-message">{textAreaError}</div>}
          <input 
            disabled={email !== emailConfirmation} 
            className={ email !== emailConfirmation || email === '' ? 'disable' : 'available'} type="submit" value="Enviar Orden" />
        </form> 
      </>
      }
        
      </div>
    </div>
  )
}

export default SendOrder
