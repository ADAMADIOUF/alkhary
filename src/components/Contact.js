import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import MapContact from './MapContact'
import axios from 'axios'

const Contact = () => {
  const latitude = 12.3456 // Replace with the actual latitude
  const longitude = -67.8901 // Replace with the actual longitude
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
      // Submit reservation data to your serverless function
      const response = await axios.post('/.netlify/functions/contact', formData)
      console.log('Message envoyé :', response.data)

      // Show success message
      setSuccessMessage('Message envoyé avec succès.')

      // Clear the form fields after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      })

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('')
      }, 3000)
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error)
      // Handle errors and show an error message to the user if needed.
    }
  }

  return (
    <div id='contact'>
      <div className='title'>
        <div className='underline'></div>
        <h3>Contact</h3>
        <div className='underline'></div>
      </div>
      <div className='contact-info contact'>
        <div className='contact-container section-center'>
          <article className='contact-details'>
            <h3>Nous aimerions avoir de vos nouvelles</h3>
            <p>
              <span>Tél :</span>
              +221779255555
            </p>
            <p>
              <span>Tél :</span>
              +221765944444
            </p>
            <p>
              <span>E-mail :</span> alkhaïry233@gmail.com
            </p>
            <p>
              <span>Adresse :</span> Kaolack, route de Dakar
            </p>
            <div className='link-socials'>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaInstagram />
              </span>
            </div>
          </article>
          <article className='contact-form'>
            <form onSubmit={handleSubmit} className='form-reservation'>
              <div className='reservation-input'>
                <label htmlFor='name'>Nom :</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='reservation-input'>
                <label htmlFor='email'>E-mail :</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='reservation-input'>
                <label htmlFor='message'>Envoyer votre message :</label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type='submit' className='reservation-btn'>
                Envoyer
              </button>
            </form>
          </article>
          {successMessage && (
            <div className='success-message'>{successMessage}</div>
          )}
        </div>
        <div className='map'>
          <MapContact latitude={latitude} longitude={longitude} />
        </div>
      </div>
    </div>
  )
}

export default Contact
