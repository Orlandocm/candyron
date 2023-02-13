import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ItemListContainer from './pages/ItemListContainer'
import MainPage from './pages/MainPage'
import ItemDetail from './pages/ItemDetail'
import Error404Page from './pages/Error404Page'
import './App.css'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
      errorElement: <Error404Page/>,
      children: [
        {
          path: '/itemlist/Pasteleria',
          element: <ItemListContainer greeting={'BIENVENIDOS A CANDYRON'} />
        },
        {
          path: '/details/:productId',
          element: <ItemDetail />,
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
