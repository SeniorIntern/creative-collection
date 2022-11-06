import React from 'react'
import './assets/styles/App.css'
import { BusinessVerticles } from './components/BusinessVerticles'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroContainer from './components/HeroContainer'
import HomeBody from './components/HomeBody'

export default function App() {
  return (
    <div className='app'>
      <div className='app__HeaderContainer'>
        {/* Header */}
        <Header />
      </div>
      <div className='app__container'>
        {/* Hero Image */}
        <HeroContainer />
      </div>
      <div className='gradient__Container'></div>
      <div className='app__container'>
        {/* react router dom start*/}
        <HomeBody />
        {/* Business Verticles */}
        <BusinessVerticles />
        {/* react router dom end*/}
        {/* Footer */}
      </div>
      <div className='app__containerTwo'></div>
      <div className='app__FooterContainer'>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
