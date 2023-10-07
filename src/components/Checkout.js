import React, { useState } from 'react'
import axios from 'axios'
import { useCart } from '../CartContext'
import PayPalCheckoutButton from './Paypal'
import Order from './Order'

const Checkout = () => {
  const { cart, clearCart } = useCart() // Import clearCart function
  const [customerName, setCustomerName] = useState('')
  const [paymentSuccess, setPaymentSuccess] = useState(false) // State to track payment success

  const handlePaymentSuccess = (details, data) => {
    // Handle successful payment confirmation
    console.log('Payment successful:', details)
    console.log('Transaction ID:', data.orderID)

    // Optionally, navigate to a confirmation page or perform other actions

    // Clear the cart and set payment success to true
    clearCart()
    
    setPaymentSuccess(true)
  }

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.priceone * item.quantity
  }, 0)
  const titles = cart.map((item) => item.title)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const order = {
      customerName,
      cart,
    }

    try {
      const response = await axios.post('/.netlify/functions/checkout', order)

      // Handle the response (e.g., show a confirmation message)
      console.log('Order placed:', response.data)
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Error placing order:', error)
    }
  }

  return (
    <div>
      <h2>Checkout</h2>
      {paymentSuccess ? (
        // Display a success message after payment
        <div>
          <p>Your payment was successful!</p>
          {/* Optionally, show a confirmation message or navigate to a confirmation page */}
        </div>
      ) : (
        // Display the cart and payment form
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Cart Items:</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <h4>{item.title}</h4>
                  <p>Price: {item.priceone}CFA</p>
                  <img src={item.img[0].url} alt={item.title} />
                  <p>Quantity: {item.quantity}</p>
                </li>
              ))}
            </ul>
          </div>
          <p>Total Price: {totalPrice}CFA</p>
          

          <div>
            <PayPalCheckoutButton
              amount={totalPrice}
              onSuccess={handlePaymentSuccess}
            />
          </div>
        </form>
      )}
      <Order totalPrice={totalPrice} titles={titles} />
    </div>
  )
}

export default Checkout
