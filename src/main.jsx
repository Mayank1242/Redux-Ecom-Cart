import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { CartOne } from './Components/Cart/Cart.jsx'
import { Items } from './Components/Items.jsx'
import { Store } from './app/Store.jsx'
import { Provider } from 'react-redux'
import { ProductOverviewOne } from './Components/ParticularItem/ClickItem.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='' element={<Items/>}/>
      <Route path='/cart' element={<CartOne/>}/>
      <Route path='/item' element={<ProductOverviewOne/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={Store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
