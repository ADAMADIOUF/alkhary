import React, { useEffect } from 'react'
import a from '../assets/about1.png'
import b from '../assets/about-2.png'
import c from '../assets/about-3.png'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='about section-center' id='about'>
      <div className='title'>
        <div className='underline'></div>
        <h3>À propos de nous</h3> {/* Translated title: About us */}
        <div className='underline'></div>
        <div className='about-container'>
          <h3>Notre histoire</h3> {/* Translated title: Our history */}
          <p>
            Nous avons commencé notre aventure culinaire il y a plusieurs
            décennies, avec une passion pour la création de plats délicieux et
            mémorables. Depuis lors, nous nous sommes engagés à offrir à nos
            clients une expérience gastronomique inoubliable, en puisant dans
            les traditions culinaires authentiques et en innovant constamment
            pour satisfaire vos papilles gustatives. Venez découvrir notre
            histoire, une histoire de saveurs, de dévouement et d'excellence.
          </p>
          <img src={a} alt='' />
          <h3>Dans la cuisine</h3> {/* Translated title: In the kitchen */}
          <p>
            Nos chefs passionnés et talentueux travaillent avec dévouement dans
            notre cuisine pour créer des plats qui émerveilleront vos papilles
            gustatives. Chaque ingrédient est sélectionné avec soin, chaque
            saveur est harmonieusement mariée pour offrir une expérience
            culinaire exceptionnelle. Chez Alkhaïry Restaurant, la cuisine est
            plus qu'une simple préparation de repas, c'est un art qui se traduit
            par des plats délicieux et uniques.
          </p>
          <div className='about-img-container'>
            <img src={b} alt='' />
            <img src={c} alt='' />
          </div>
        </div>
      </div>
      <div className='restaurant-info'>
        <h1>Restaurant Alkhaïry</h1> {/* Title for Alkhaïry Restaurant */}
        <p>
          Bienvenue chez le Restaurant Alkhaïry, où nous servons une cuisine
          délicieuse depuis des années.
        </p>{' '}
        {/* Description for Alkhaïry Restaurant */}
      </div>
    </div>
  )
}

export default About
