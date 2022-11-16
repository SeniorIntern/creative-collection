import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/styles/News.css'

export default function News({ id, title, firstImageUrl }) {
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
                <img src={firstImageUrl} alt='Avatar' className='image' />
                <div className='overlay'>
                    <div className='text'>{title}</div>
                    <NavLink to={`/news/${id}`}>
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
