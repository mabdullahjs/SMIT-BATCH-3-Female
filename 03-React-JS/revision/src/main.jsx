import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Navbar from './component/Navbar.jsx'
import SingleProduct from './pages/SingleProduct.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='product' element={<Product/>}/>
    <Route path='product/:id' element={<SingleProduct/>}/>
  </Routes>
  </BrowserRouter>
)
