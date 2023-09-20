import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Login from './routes/Login'
import Signup from './routes/Signup'
import ShoppingCart from './routes/ShoppingCart'
import Root from './routes/Root'
import Products from './routes/Products'
import ProductDetail from './routes/ProductDetail'
import AppProvider from './context/AppContext'
import ShoppingCartProvider from './context/ShoppingCartContext'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetail /> },
      { path: "shopping-cart", element: <ShoppingCart /> },
      { path: "login", element: <Login /> },
      { path: "sign-up", element: <Signup /> },


    ]
  }
])



function App() {

  return (
    <AppProvider>
      <ShoppingCartProvider>
        <RouterProvider router={router} />
      </ShoppingCartProvider>

    </AppProvider>
  )


}

export default App
