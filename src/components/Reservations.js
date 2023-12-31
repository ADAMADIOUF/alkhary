import React, { useState } from 'react';
import axios from 'axios';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    numéroDeTéléphone: '', // Changed the field name to French
  });

  const [successMessage, setSuccessMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit reservation data to your serverless function
      const response = await axios.post(
        '/.netlify/functions/reservations',
        formData
      );
      console.log('Réservation envoyée:', response.data);
      
      // Show success message
      setSuccessMessage('Réservation envoyée avec succès.');

      // Clear the form fields after successful submission
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '',
       phoneNumber: '', // Changed the field name to French
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la réservation:', error);
      // Handle errors and show an error message to the user if needed.
    }
  };

  return (
    <div className='reservations section-center' id='reservations'>
      <div className='title'>
        <div className='underline'></div>
        <h3> réservation</h3>
        <div className='underline'></div>
      </div>
      {successMessage && (
        <div className='success-message'>{successMessage}</div>
      )}
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
          <label htmlFor='number'>Numéro de téléphone :</label>
          <input
            type='text' // Change the type to "text"
            id='number'
            name='phoneNumber' // Update the name to match your formData property
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className='reservation-input'>
          <label htmlFor='date'>Date :</label>
          <input
            type='date'
            id='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className='reservation-input'>
          <label htmlFor='time'>Heure :</label>
          <input
            type='time'
            id='time'
            name='time'
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className='reservation-input'>
          <label htmlFor='guests'>Nombre d'invités :</label>
          <input
            type='number'
            id='guests'
            name='guests'
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit' className='reservation-btn'>Envoyer</button>
      </form>
    </div>

  )
};

export default Reservations;


