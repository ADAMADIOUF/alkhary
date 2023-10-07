const dotenv = require('dotenv')
dotenv.config()

const Airtable = require('airtable-node')
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE)

exports.handler = async (event, context, callback) => {
  const { httpMethod, body } = event

  if (httpMethod === 'POST') {
    // Endpoint for adding items to the cart
    try {
      const { productId, quantity } = JSON.parse(body)
      const product = await airtable.retrieve(productId)

      if (product.error) {
        return {
          statusCode: 404,
          body: `Product not found with ID: ${productId}`,
        }
      }

      // Implement logic to add the product to the user's cart
      // ...

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Product added to cart successfully' }),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      }
    }
  } else if (httpMethod === 'PUT') {
    // Endpoint for updating item quantities in the cart
    try {
      const { productId, quantity } = JSON.parse(body)

      // Implement logic to update the user's cart with the new quantity
      // ...

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Cart updated successfully' }),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      }
    }
  } else if (httpMethod === 'DELETE') {
    // Endpoint for removing items from the cart
    try {
      const { productId } = JSON.parse(body)

      // Implement logic to remove the product from the user's cart
      // ...

      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Product removed from cart successfully',
        }),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      }
    }
  } else {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    }
  }
}
