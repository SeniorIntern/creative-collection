import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Event({ id, title, ImgOne }) {
    const [visible, setVisible] = useState(false)

    function renderBtn() {
        setVisible(!visible)
    }

    return (
        <div
            className='news'
            onClick={() => {
                renderBtn()
            }}
        >
            <div className='container'>
                <img src={ImgOne} alt='Avatar' className='image' />
                <div className='overlay'>
                    <div className='text'>{title}</div>
                    <NavLink to={`/events/${id}`}>
                        {visible && (
                            <button className='news__readMore'>
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
