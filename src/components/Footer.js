import React, { useState } from 'react'
import axios from 'axios'
const Footer = () => {
 const [formData, setFormData] = useState({
  
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
     // Submit reservation data to your serverless function
     const response = await axios.post('/.netlify/functions/contact-footer', formData)
     console.log('Message envoyé :', response.data)

     // Show success message
     setSuccessMessage('Message envoyé avec succès.')

     // Clear the form fields after successful submission
     setFormData({
      
       email: '',
      
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
    <div className='footer'>
      <div className='footer-center section-center'>
        <article>
          <h3>Connect</h3>
          <div className='footer-icons'>
            <a
              href='https://www.instagram.com/khadiscuisine/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <img
                  src='https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8d6893330740455c96d218258a458aa4.png'
                  alt=''
                />
              </span>
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=61552006883679'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <img
                  src='https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png'
                  alt=''
                />
              </span>
            </a>
            <a
              href='https://twitter.com/KhadisCuisine'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <img
                  src='https://static.wixstatic.com/media/9c4b521dd2404cd5a05ed6115f3a0dc8.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c4b521dd2404cd5a05ed6115f3a0dc8.png'
                  alt=''
                />
              </span>
            </a>
          </div>
          <h3>734-905-7013</h3>
          <p>khadiscuisine1@gmail.com</p>
        </article>
        <article>
          <h3>Location</h3>
          <p>Mon - Closed</p>
          <p>Tues- Sun: 12pm - 10pm</p>
          <p>421 West Cross Street Ypsilanti, Mi 48197</p>
        </article>
        <article>
          <h3>Contact us</h3>
          {successMessage && (
            <div className='success-message'>{successMessage}</div>
          )}
          <form onSubmit={handleSubmit} className='contact-footer'>
            <label htmlFor=''>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='input-footer'
            />
            <button type='submit' className='btn-footer'>
              Send
            </button>
          </form>
        </article>
      </div>
    </div>
  )
}

export default Footer
