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
    })

    return (
        <div className='eventDetail'>
            {event.map((ev) => (
                <div className='event__detail' key={ev.id}>
                    <div className='event__title'>
                        <h4>{ev.title}</h4>
                    </div>
                    <div className='event__image'>
                        <img src={ev.firstImageUrl} alt='Event first frame' />
                        <div className='date__event'>
                            <span>August 28, 2022</span>
                        </div>
                    </div>
                    <div className='event__bottom'>
                        <div className='event__description'>
                            <div className='event__descriptions'>
                                <h5>{ev.firstDesc}</h5>
                            </div>
                        </div>
                        <div className='event__images'>
                            {ev.firstImageUrl !== null ? (
                                <div></div>
                            ) : (
                                <img
                                    src={ev.firstImageUrl}
                                    alt='Event second frame'
                                />
                            )}

                            <img
                                src={ev.firstImageUrl}
                                alt='Event third frame'
                            />
                            <img
                                src={ev.firstImageUrl}
                                alt='Event fourth frame'
                            />
                        </div>
                    </div>
                    <div className='event__last_part event__descriptions'>
                        <h5>{ev.firstDesc}</h5>
                        <h5>{ev.firstDesc}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}
