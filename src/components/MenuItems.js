import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../CartContext'
import { FaAngleRight } from 'react-icons/fa'

const SingleMenuItem = () => {
  const navigate = useNavigate() // Initialize the navigate function

  const { id } = useParams()
  const [menuItem, setMenuItem] = useState({})
  const { cart, addToCart } = useCart()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8888/.netlify/functions/single-product?id=${id}`
        )

        console.log('Data from the serverless function:', response.data)

        setMenuItem(response.data)
        setLoading(false) // Data has loaded successfully
      } catch (error) {
        console.error('Error fetching data:', error)
        setError(error) // Set the error state
        setLoading(false) // Loading finished (even if there's an error)
      }
    }

    fetchData()
  }, [id])

  const handleAddToCart = () => {
    addToCart(menuItem)
    navigate('/cart') // Navigate to the cart page
  }
  if (loading) {
    return (
      <div className='menu-details section-center'>
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className='menu-details section-center'>
        <p>Error: {error.message}</p>
      </div>
    )
  }

  return (
    <>
      <div className='link-menu'>
        <ul>
          <li>
            <Link to={`/menu`}>menu</Link>
          </li>
          <FaAngleRight />
          <li>
            {' '}
            <Link to={`/menu`}>{menuItem.categories}</Link>
          </li>
        </ul>
      </div>
      <div className='menu-details'>
        <div className='single-menu-img'>
          {menuItem.img && menuItem.img.length > 0 && (
            <img
              src={menuItem.img[0].url}
              alt={menuItem.title}
              className='menu-img big-img'
            />
          )}
        </div>

        <div className='desc-menu'>
          <h3>{menuItem.title}</h3>
          <h3>{menuItem.priceone}CFA</h3>
          <p>{menuItem.descone}</p>
        </div>
      </div>
      <div>
        <button onClick={handleAddToCart} className='single-menu-cart btn'>
          Add to Cart
        </button>
      </div>
    </>
  )
}

export default SingleMenuItem
