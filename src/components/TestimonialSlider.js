import React, { useState, useEffect } from 'react'

const testimonialData = [
  {
    id: 1,
    title: 'Amazing Experience',
    name: 'John Doe',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Fantastic Food',
    name: 'Jane Smith',
    testimonial: 'Suspendisse vel justo in tellus laoreet hendrerit.',
  },
  {
    id: 3,
    title: 'Highly Recommended',
    name: 'Alice Johnson',
    testimonial:
      'Pellentesque non dolor nec quam volutpat varius eget eget turpis.',
  },
]

const TestimonialSlider = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Adjust the autoplay interval (in milliseconds)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <h2>A Word From Our Customers</h2>

      <div className='testimonial-slider'>
        {testimonialData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-slide ${
              index === currentTestimonialIndex ? 'active' : ''
            }`}
          >
            <h2>{testimonial.title}</h2>
            <p>{testimonial.testimonial}</p>
            <p className='name'>{testimonial.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default TestimonialSlider
