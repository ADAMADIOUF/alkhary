import React from 'react'
import a from '../assets/home1.png'
import b from '../assets/home3.png'
import Header from './Header'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home' id='home'>
      <Header />
      <div className='home-container section-center'>
        <article>
          <h3>Préparé avec amour.</h3>
          <h3>Simplicité délicieuse</h3>
          <p>
            Dégustez des plats savoureux préparés avec passion. Chez Alkhaïry,
            nous sommes fiers de vous offrir une expérience culinaire
            exceptionnelle.
          </p>
          <Link to={`/menu`}>
            <button className='button menu'>Voir le menu</button>
          </Link>
        </article>
        <article>
          <div className='home-img'>
            <img src={a} alt='' />
          </div>
        </article>
      </div>
      <div className='home-second'>
        <div className='overlay'></div>
      </div>
      <div className='about-home section-center'>
        <div className='card-home-about'>
          <h3>Une cuisine fraîche et de saison</h3>
          <p>
            Notre cuisine met en avant les ingrédients de saison pour créer des
            plats délicieux. Découvrez l'histoire d'Alkhaïry et notre passion
            pour la cuisine.
          </p>
          <Link to={`/about`}>
            <button className='button'>À propos d'Alkhaïry</button>
          </Link>
        </div>
      </div>
      <div className='home-container section-center'>
        <article>
          <div className='home-img'>
            <img src={b} alt='' />
          </div>
        </article>
        <article>
          <h3>Préparé avec amour.</h3>
          <h3>Simplicité délicieuse</h3>
          <p>
            Découvrez notre gamme de plats délicieux, des hamburgers savoureux
            aux pizzas croustillantes. Alkhaïry est votre destination gourmande.
          </p>
          <Link to={`/menu`}>
            <button className='button menu'>Voir le menu</button>
          </Link>
        </article>
      </div>
    </div>
  )
}

export default Home
