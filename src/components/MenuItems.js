import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Order from './Order'

const SingleMenuItem = () => {
  const { id } = useParams()
  const [menuItem, setMenuItem] = useState({})
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
      <div className='menu-details section-center'>
        {/* Display the image if it exists */}
        {menuItem.img && menuItem.img.length > 0 && (
          <img
            src={menuItem.img[0].url}
            alt={menuItem.title}
            className='menu-img big-img'
          />
        )}

        <div className='desc-menu'>
          <p>{menuItem.descone}</p>
          <span className='title-dash'></span>
          <h3>{menuItem.priceone}CFA</h3>
        </div>
        <div className='desc-menu'>
          <p>{menuItem.desctwo}</p>
          <span className='title-dash'></span>
          <h3>{menuItem.pricetwo}CFA</h3>
        </div>
        {menuItem.descthree ? (
          <div className='desc-menu'>
            <p>{menuItem.descthree}</p>
            {menuItem.priceone && menuItem.descthree ? (
              <span className='title-dash'></span>
            ) : null}
            {menuItem.pricethree ? <h3>{menuItem.pricethree}CFA</h3> : null}
          </div>
        ) : null}
      </div>
      <div className='title'>
        <Order />
      </div>
    </>
  )
}

export default SingleMenuItem
