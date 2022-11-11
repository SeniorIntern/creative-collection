import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import '../assets/styles/EventDetail.css'

export default function EventDetail() {
    const { id } = useParams()
    const [event, setEvent] = useState([])

    useEffect(() => {
        const getEvents = async () => {
            const response = await fetch(
                `http://localhost:5001/event/get/${id}`
            )
            setEvent(await response.json())
        }
        getEvents()
    }, [])

    return (
        <div className='eventDetail'>
            {console.table(event)}
            <div className=''>This is Event Detail Page</div>
            {event.map((ev) => (
                <div className='event__contents' key={ev.id}>
                    <div className='event__detail'>
                        <h1>{ev.title}</h1>
                    </div>
                    <div className='eventImages'>
                        <div className='event__firstImage'>
                            <img src={ev.imageUrl} />
                        </div>
                    </div>
                    <div className='event__description'>
                        <div className='event__firstDescription'>
                            {ev.firstDesc}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
