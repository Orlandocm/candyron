import Logo from '../assets/logo.png'
import '../styles/home.css'

const MainPages = () => {
  return (
    <div className='main-container'>
      <h1>CANDYRON</h1>
      <img className='logo' src={Logo} alt="home" />
    </div>
  )
}

export default MainPages