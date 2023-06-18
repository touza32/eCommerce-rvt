import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import Checkout from '../../Components/Checkout'
import { ShoppingCartProvider } from '../../Components/Context'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/*', element: <NotFound /> }
  ])

  return routes
}


const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <Checkout />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
