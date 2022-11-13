import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/styles/Event.css'

export default function Event({ id, title, firstImageUrl }) {
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
                <img src={firstImageUrl} alt='Avatar' className='image' />
                <div className='overlay'>
                    <div className='text'>{title}</div>
                    <NavLink to={`/event/${id}`}>
                        {visible && (
                            <button className='event__readMore'>
                                Read More
                            </button>
                        )}
                    </NavLink>
                </div>
                <br />
            </div>
        </div>
    )
}
