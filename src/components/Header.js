import React from 'react'
import '../assets/styles/Header.css'
import logo from '../assets/images/site__logo.png'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <div className='header__contents'>
        <div className='content__left'>
          <Link to='/'>
            <div className='header__logo'>
              <img src={logo} alt='site logo' className='logo' />
            </div>
          </Link>

          <div className='flex-need'>
            <nav className='header__navOption '>
              <ul className='routeOptions'>
                <NavLink
                  to='/about'
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  <li>About Us</li>
                </NavLink>
                <NavLink
                  to='/events'
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  <li>Events</li>
                </NavLink>
                <NavLink
                  to='/products'
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  <li>Our Products</li>
                </NavLink>
                <NavLink
                  to='/contact'
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  <li>Contact Us</li>
                </NavLink>
              </ul>
            </nav>
          </div>
        </div>

        <div className='content__right flex-need'>
          <div className='user__action '>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
