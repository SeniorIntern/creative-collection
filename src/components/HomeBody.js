import React from 'react'
import binod from '../assets/images/binod.png'
import '../assets/styles/HomeBody.css'
import im1 from '../assets/images/R.jfif'
import im2 from '../assets/images/OIP (1).jfif'
import im3 from '../assets/images/OIP.jfif'
export default function HomeBody() {
  return (
    <div className='homeBody'>
      <h3 className='container'>Top News</h3>
      <div className='container'>
        <div className='left__homebody'>
          <div className='left__homebody__upperContainer'>
            <img className='homeBodyImg' src={im1} alt='' />
          </div>
          <div className='left__homebody__lowerContainer'>
            <div className='left__homebody__lowerContainer__containers'>
              <img src={im2} className='homeBodyImg' alt='' />
            </div>
            <div className='left__homebody__lowerContainer__containers'>
              <img src={im3} className='homeBodyImg' alt='' />
            </div>
          </div>
        </div>
        <div className='right__homebody'>s</div>
      </div>
    </div>
  )
}
