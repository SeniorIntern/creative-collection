import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../assets/styles/Dashboard.css'

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='News__options'>
                <Link to='/manageNews'>
                    <button className='news__option'>
                        <h1>Manage News</h1>
                    </button>
                </Link>
                <Link to='/manageNews'>
                    <button className='news__option'>
                        <h1>Manage Events</h1>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard
