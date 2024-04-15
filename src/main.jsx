import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './components/Product/Product.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Shop from './components/Shop/Shop.jsx';
import OrderPage from './components/OrderPage/OrderPage.jsx';
import InventoryPage from './components/InventoryPage/InventoryPage.jsx';
import LogInPage from './components/LogInPage/LogInPage.jsx';
import HomePage from './components/Layout/HomePage.jsx';
import Home from './components/Layout/Home.jsx';
import cartProductLoader from './Loaders/cartProductLoader.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        element: <OrderPage></OrderPage>,
        loader: cartProductLoader
      },
      {
        path: '/inventory',
        element: <InventoryPage></InventoryPage>
      },
      {
        path: '/login',
        element: <LogInPage></LogInPage>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
