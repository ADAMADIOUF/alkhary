import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FoodMenu = () => {
  const [menuData, setMenuData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/.netlify/functions/products', {})
        console.log('Data from the serverless function:', response.data)
        setMenuData(response.data)
        setLoading(false) // Data has loaded successfully
      } catch (error) {
        console.error('Error fetching data:', error)
        setError(error) // Set the error state
        setLoading(false) // Loading finished (even if there's an error)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className='menu section-center' id='menu'>
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className='menu section-center' id='menu'>
        <p>Error: {error.message}</p>
      </div>
    )
  }

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? menuData.filter((item) => item.categories === selectedCategory)
    : menuData

  return (
    <div>
      <div className='category-buttons'>
        {Array.from(new Set(menuData.map((item) => item.categories))).map(
          (category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={category === selectedCategory ? 'active-category' : ''}
            >
              {category}
            </button>
          )
        )}
      </div>
      <div className='food-menu'>
        {filteredProducts.map((product, index) => (
          <Link to={`/menuItems/${product.id}`} key={index}>
            <div className='food-menu-info'>
              <img src={product.img} alt='' className='menu-img' />
              <div className='food-menu-details'>
                <h3>{product.title}</h3>
                <p>Price: {product.priceone}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FoodMenu
