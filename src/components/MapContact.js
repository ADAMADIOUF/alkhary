import React, { useEffect } from 'react'

const MapContact = ({ latitude, longitude }) => {
  useEffect(() => {
    if (window.google) {
      // Initialize the map
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: latitude, lng: longitude },
        zoom: 10, // Adjust the zoom level as needed
      })

      // Create a marker for the location
      new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
      })
    } else {
      console.error('Google Maps API is not loaded.')
    }
  }, [latitude, longitude])

  return <div id='map' style={{ width: '100%', height: '300px' }}></div>
}

export default MapContact
