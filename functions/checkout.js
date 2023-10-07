// netlify/functions/checkout.js

const dotenv = require('dotenv')
dotenv.config()
const Airtable = require('airtable-node')
const axios = require('axios')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE)

exports.handler = async (event) => {
  try {
    const { customerName, cart } = JSON.parse(event.body)

    // Process the order data and add it to your Airtable base
    // You can loop through the cart items and create new records in your Airtable table

    // For example:
    const orderRecords = await Promise.all(
      cart.map((item) =>
        airtable.create({
          customerName,
          // Add other fields for each cart item
        })
      )
    )

    // You can also send an email confirmation to the customer or perform other actions here

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Order placed successfully' }),
    }
  } catch (error) {
    console.error(error)

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error processing the order' }),
    }
  }
}
