import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2'

const PayPalCheckoutButton = ({ amount, onSuccess }) => {
  return (
    <PayPalButton
      amount={amount}
      onSuccess={(details, data) => {
        // Handle the successful payment here
        console.log('Payment successful:', details)
        onSuccess(details, data)
      }}
    />
  )
}

export default PayPalCheckoutButton
