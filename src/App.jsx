import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { ShopingCartProvider } from './context/ShoppingCartContext'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Error404Page from './pages/Error404Page'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MainPage from './pages/MainPage'
import Cart from './components/Cart'
import './App.css'

function App () {
  return (
    <ShopingCartProvider>
      <BrowserRouter>
        <div className='main-container'>
          <NavBar/>
          <Routes>
            <Route exact path= '/' element= {<MainPage />} />
            <Route exact path= '/catalogue' element= {<ItemListContainer greeting= {"Bienvenidos a Candyron"} />} />
            <Route exact path= '/category/:categoryId' element = {<ItemListContainer  />} />
            <Route exact path= '/item/:id' element= {<ItemDetailContainer />} />
            <Route exact path= '/cart' element= {<Cart />} />
            <Route exact path='/404' element= {<Error404Page/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </ShopingCartProvider> 
  )
}

export default App
