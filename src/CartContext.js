import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  useEffect(() => {
    // Load cart items from local storage when the component mounts
    const storedCart = JSON.parse(localStorage.getItem('cart'))
    if (storedCart) {
      setCart(storedCart)
      console.log('Loaded cart from local storage:', storedCart)
    }
  }, [])

  useEffect(() => {
    // Save cart items to local storage whenever the cart changes
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log('Saved cart to local storage:', cart)
  }, [cart])
const clearCart = () => {
  setCart([])
}
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }])
  }

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
  }

  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
