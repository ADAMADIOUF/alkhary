import React from 'react'
import { useCart } from '../CartContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
 const navigate = useNavigate()
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart()

  // Calculate the total price
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.priceone * item.quantity
  }, 0)

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <span className='cart-count'>Cart is empty</span>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <h3>{item.priceone}CFA</h3>
                <img src={item.img[0].url} alt={item.title} />
                {item.quantity}
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </ul>
          <h3>Total Price: {totalPrice}CFA</h3>
        </>
      )}
      <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
    </div>
  )
}

export default Cart
