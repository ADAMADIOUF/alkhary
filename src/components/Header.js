import React, { useState } from 'react'
import{FaAngleDown} from "react-icons/fa"

import axios from 'axios';
import a from "../assets/header.mp4";

const Header = () => {

 const handleClick = () => {
   const homeSection = document.getElementById('home')
   if (homeSection) {
     homeSection.scrollIntoView({ behavior: 'smooth' })
   }
 }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    
  })

  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      
      const response = await axios.post('/.netlify/functions/newsletter', formData)
      console.log('Message envoyé :', response.data)

    
      setSuccessMessage('Message envoyé avec succès.')

      setFormData({
        name: '',
        email: '',
       
      })

      setTimeout(() => {
        setSuccessMessage('')
      }, 3000)
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error)
      
    }
  }

  return (
    <div className='header'>
      <div className='header-video'>
        <video autoPlay muted loop>
          <source src={a} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='header-content'>
        <h3>Taste & Tranquility</h3>
        <button className='btn btn-order'>order now</button>
        <div className='link-home' onClick={handleClick}>
          <span>
            <FaAngleDown />
          </span>
        </div>
      </div>
      <div className='newsletter'>
        <div>
          <h3>join our news and offers!</h3>
        </div>
        <div>
          {successMessage && (
            <div className='success-message'>{successMessage}</div>
          )}
          <form onSubmit={handleSubmit} className='newsletter-form'>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='input-newsletter'
            />
            <input
              type='email'
              id='email'
              name='email'
              placeholder='email address'
              value={formData.email}
              onChange={handleChange}
              required
              className='input-newsletter'
            />
            <button type='submit' className='btn btn-newsletter'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header
