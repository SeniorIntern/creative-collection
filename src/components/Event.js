import React, { useState } from 'react'
import '../assets/styles/Event.css'

export default function Event({ id, title, image }) {
  const [visible, setVisible] = useState(false)

  function renderBtn() {
    setVisible(!visible)
  }

  return (
    <div
      className='event'
      onClick={() => {
        renderBtn()
      }}
    >
      <div className='container'>
        <img src={image} alt='Avatar' className='image' />
        <div className='overlay'>
          <div className='text'>{title}</div>
          {visible && <button className='event__readMore'>Read More</button>}
        </div>
        <br />
      </div>
    </div>
  )
}
