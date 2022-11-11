import React, { useEffect, useState } from 'react'
import Event from './Event'
import '../assets/styles/Events.css'

export default function Events() {
    const [events, setEvents] = useState([])
    useEffect(() => {
        const getEvents = async () => {
            const response = await fetch('http://localhost:5001/event/get')
            setEvents(await response.json())
        }
        getEvents()
    }, [events])

    return (
        <div className='events'>
            <h1 className='eventTitle'>Welcome to Our Events Archieve</h1>
            <div className='events__list'>
                {events.map((event, id) => {
                    return <Event key={id} {...event} />
                })}
            </div>
        </div>
    )
}
