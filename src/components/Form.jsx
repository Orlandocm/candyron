
import '../styles/form.css'

const Form = () => {
  return (
    <div className='container'>
      <h2>Enviar Orden</h2>
      <form className='container-form' action="">
        <label htmlFor="">Nombre:</label>
        <input className='form-text' type="text" />
        <label htmlFor="">Email</label>
        <input className='form-text' type="text" />
        <label htmlFor="">Que quieres decirnos</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
      <div className='btn-container'>
        <a className='button'>Terminar Compra</a>
      </div>
    </div>
  )
}

export default Form