import Logo from '../assets/Logo.png'
import '../styles/home.css'

const MainPages = () => {
  return (
    <div className='home-container'>
      <h1>CANDYRON</h1>
      <img className='logo' src={Logo} alt="home" />
    </div>
  )
}

export default MainPages