import { BrowserRouter, Routes,Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error404Page from './pages/Error404Page'
import MainPage from './pages/MainPage'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path= '/' element= {<MainPage />} />
        <Route exact path= '/catalogue' element= {<ItemListContainer greeting= {"Bienvenidos a Candyron"} />} />
        <Route exact path= '/category/:categoryId' element = {<ItemListContainer />} />
        <Route exact path= '/item/:id' element= {<ItemDetailContainer />} />
        <Route exact path= '/cart' element= {<Cart />} />
        <Route exact path='/404' element= {<Error404Page/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
