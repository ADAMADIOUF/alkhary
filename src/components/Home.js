import React from 'react'
import Header from './Header'
import {FaShieldAlt, FaUsers } from 'react-icons/fa'
import{ GiTreeBranch } from "react-icons/gi"
import a from "../assets/home1.png"
import b from '../assets/khadis.png'
import c from '../assets/home-3.png'
import TestimonialSlider from './TestimonialSlider'


const Home = () => {
 
  return (
    <>
      <Header />
      <div className='home' id='home'>
        <div className='home-first-img'>
          <img src={a} alt='' />
        </div>
        <div className='home-details section-center'>
          <img src={b} alt='' className='khadis-img' />
          <p>
            Khadi's Cuisine Restaurant is located in Ypsilanti, MI at 421 W.
            Cross. We specialize in African, halal and International Cuisine. We
            serve delicious, nourishing food and all natural beverages, staying
            true to our commitment to using as much local, sustainable produce
            and authentic ingredients. Our restaurant is set up for dine in,
            carry out and soon delivery with DoorDash
          </p>
          <button className='btn '>food menu</button>
        </div>
        <div className='home-container section-center'>
          <article className='home-info'>
            <h2>We Do Catering!</h2>
            <h3>We cater for all sizes and budgets.</h3>
            <div className='home-info-span'>
              <span>- Graduations</span>
              <span>- Weddings</span>
              <span>- Baby Showers</span>
              <span>- Birthday Parties</span>
              <span>- Engagement Parties</span>
              <span>- Holidays</span>
              <span>- Any celebration</span>
            </div>
            <p>
              We will come up with a delicious customized plan that will please
              everyone and take the pressure off of you.{' '}
            </p>
            <button className='btn btn-contact'>contact us</button>
          </article>
          <article className='home-info-img'>
            <img src={c} alt='' />
          </article>
        </div>
        <div className='second-home'>
          <div className='second-home-container section-center'>
            <article>
              <FaUsers size={48} color='white' />
              <h3>Community</h3>
              <p>
                We believe in the power of community and strive to be a
                welcoming space for all. Join us in building connections and
                savoring the flavors of togetherness, one plate at a time.
              </p>
            </article>
            <article>
              <GiTreeBranch size={48} color='white' />

              <h3>Sustainability</h3>
              <p>
                From locally sourced veggies to eco-friendly practices, every
                choice we make is a step toward a greener future. Join us in
                savoring the taste of sustainability, one delicious bite at a
                time.
              </p>
            </article>
            <article>
              <FaShieldAlt size={48} color='white' />

              <h3>Integrity</h3>
              <p>
                When you dine with us, you're not just savoring the tastes of
                West Africa; you're experiencing a commitment to honesty,
                authenticity, and the vibrant flavors of our culture.
              </p>
            </article>
          </div>
        </div>
        <div className='third-home-container section-center'>
          <article className='third-home-info'>
            <div>
              <h2>All natural delicious beverages</h2>
              <p>
                Loaded with natural flavors and nutrients. A very healthy
                refreshing choice!.
              </p>
            </div>
            <div className='third-home-small-img'>
              <img
                src='https://static.wixstatic.com/media/a10142_e1f22773d3f74c8593276f77fee9845d~mv2.png/v1/fill/w_496,h_744,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Jus%20De%20Bissap%20(Hibiscus%20Tea).png'
                alt=''
              />
            </div>
          </article>
          <article className='third-home-bg-img'>
            <img
              src='https://static.wixstatic.com/media/a10142_ff83691bf0bc411a969fd9b66c1e7826~mv2.png/v1/fill/w_953,h_1126,al_c,q_90,enc_auto/a10142_ff83691bf0bc411a969fd9b66c1e7826~mv2.png'
              alt=''
            />
            <button className='btn'>coffee-juices</button>
          </article>
        </div>
        <div className='last-home section-center'>
          <article className='last-img'>
            <img
              src='https://static.wixstatic.com/media/a10142_782cbf6c9c90445ba6b553b880f5a195~mv2.png/v1/crop/x_189,y_0,w_384,h_500/fill/w_460,h_600,al_c,lg_1,q_85,enc_auto/Screen%20Shot%202023-09-24%20at%2011_04_43%20AM.png'
              alt=''
            />
          </article>
          <article className='testimonial-slider'>
            <TestimonialSlider/>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home
