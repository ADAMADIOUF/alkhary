import React, { useState } from 'react'
import logo from "../assets/logok.png"
import { Link, Link as RouterLink, useLocation } from 'react-router-dom'
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { useCart } from '../CartContext'

const Navbar = () => {
  const { cart } = useCart() 

  const [isMenuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleItemClick = () => {
    setMenuOpen(false)
  }

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <nav className='navbar'>
      <div className='nav-header nav-center'>
        <div className='menu-icon' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <span className='logo'>
          <RouterLink to={`/`} onClick={scrollToTop}>
            <img src={logo} alt='' className='logo' />
          </RouterLink>
        </span>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className='nav-item'>
            <RouterLink
              to='/'
              onClick={() => {
                scrollToTop()
                handleItemClick()
              }}
            >
              Accueil
            </RouterLink>
          </li>

          <li className='nav-item'>
            <RouterLink
              to='/menu'
              onClick={() => {
                scrollToTop()
                handleItemClick()
              }}
            >
              food Menu
            </RouterLink>
          </li>
          <li className='nav-item'>
            <RouterLink
              to='/about'
              onClick={() => {
                scrollToTop()
                handleItemClick()
              }}
            >
              À propos
            </RouterLink>
          </li>
          <li className='nav-item'>
            <RouterLink
              to='/reservations'
              onClick={() => {
                scrollToTop()
                handleItemClick()
              }}
            >
              Reservations
            </RouterLink>
          </li>
          <li className='nav-item'>
            <RouterLink
              to='/contact'
              onClick={() => {
                scrollToTop()
                handleItemClick()
              }}
            >
              Contact
            </RouterLink>
          </li>
          {location.pathname.startsWith('/menuItems/') && (
            <li className='nav-item'>
              <RouterLink to='/' onClick={handleItemClick}>
                Back to Menu
              </RouterLink>
            </li>
          )}
        </ul>
        
        <div className='cart-icon'>
          <FaShoppingCart />
          <Link to='/cart'>
            {cart.length === 0 ? (
              <span className='cart-count'>Cart is empty</span>
            ) : (
              <span className='cart-count'>{cart.length}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
