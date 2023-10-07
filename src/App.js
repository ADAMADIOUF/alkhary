import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Reservations from './components/Reservations'
import MenuItems from './components/MenuItems'
import Cart from './components/Cart'

import Checkout from './components/Checkout'
import Footer from './components/Footer'
import FoodMenu from './components/FoodMenu'

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menuItems/:id' element={<MenuItems />} />
        {/* <Route path='/menu' element={<Menu />} /> */}
        <Route path='/menu' element={<FoodMenu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
