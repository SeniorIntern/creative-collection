import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/styles/App.css'
import About from './components/About'
import { BusinessVerticles } from './components/BusinessVerticles'
import Contact from './components/Contact'
import Events from './components/Events'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeBody from './components/HomeBody'
import NotFound from './components/NotFound'
import Products from './components/Products'

export default function App() {
  return (
    <Router>
      <div className='mainBox'>
        <Header />
        <div className='app__container'>
          <Routes>
            <Route path='/' element={<HomeBody />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
            <Route path='/events' element={<Events />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}
