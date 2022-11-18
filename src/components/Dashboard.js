import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../assets/styles/Dashboard.css'

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='News__options'>
                <Link to='/addnews'>
                    <button className='news__option'>
                        <h1>Add News</h1>
                    </button>
                </Link>
                <Link to='/addnews'>
                    <button className='news__option'>
                        <h1>Update News</h1>
                    </button>
                </Link>
                <Link to='/addnews'>
                    <button className='news__option'>
                        <h1>Edit News</h1>
                    </button>
                </Link>
                <Link to='/addnews'>
                    <button className='news__option'>
                        <h1>Delete News</h1>
                    </button>
                </Link>
            </div>
            <div className='Event__options'>
                <Link to='/addEvent'>
                    <button className='event__option'>
                        <h1>Add event</h1>
                    </button>
                </Link>
                <Link to='/addEvent'>
                    <button className='event__option'>
                        <h1>Update event</h1>
                    </button>
                </Link>
                <Link to='/addEvent'>
                    <button className='event__option'>
                        <h1>Edit event</h1>
                    </button>
                </Link>
                <Link to='/addEvent'>
                    <button className='event__option'>
                        <h1>Delete event</h1>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard
