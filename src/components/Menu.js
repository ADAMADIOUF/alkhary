import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Menu = () => {
  const [menuData, setMenuData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  return (
    <div className='menu section-center' id='menu'>
      <div className='title'>
        <div className='underline'></div>
        <h3>notre menu</h3>
        <div className='underline'></div>
      </div>
      <div className='menu-container'>
        {menuData.map((menuItem) => {
          const {
            id,
            img,
            title,
            descone,
            priceone,
            pricetwo,
            desctwo,
            pricethree,
            descthree,
          } = menuItem
          return (
            <Link to={`/menuItems/${id}`} key={id}>
              <div className='menu-details'>
                <img src={img} alt='' className='menu-img' />
                <div className='menu-title'>
                  <div className='title'>
                    <h3>{title}</h3>
                  </div>
                  <div className='desc-menu'>
                    <p>{descone}</p>
                    <span className='title-dash'></span>
                    <h3>{priceone}CFA</h3>
                  </div>
                  <div className='desc-menu'>
                    <p>{desctwo}</p>
                    <span className='title-dash'></span>
                    <h3>{pricetwo}CFA</h3>
                  </div>
                  <div className='desc-menu'>
                    {descthree ? <p>{descthree}</p> : null}
                    {priceone && descthree ? (
                      <span className='title-dash'></span>
                    ) : null}
                    {pricethree ? <h3>{pricethree}CFA</h3> : null}
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
