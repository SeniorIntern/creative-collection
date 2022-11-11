import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import '../assets/styles/EventDetail.css'

export default function EventDetail() {
    const { id } = useParams()
    const [event, setEvent] = useState([])

    useEffect(() => {
        const getEvent = async () => {
            const response = await fetch(
                `http://localhost:5001/event/get/${id}`
            )
            setEvent(await response.clone().json())
        }
        getEvent()
    }, [])

    return (
        <div className='eventDetail'>
            {console.log(event)} {/*testing event state*/}
            <div className=''>This is Event Detail Page</div>
            <div className='event__detail'>
                <h1>{event.title}</h1>
            </div>
            <div className='eventImages'>
                <div className='event__firstImage'>
                    <img src={event.imageUrl} />
                </div>
                {/*  
                <div className='event__secondImage'></div>
                <div className='event__thirdImage'></div>
                */}
            </div>
            <div className='event__description'>
                <div className='event__firstDescription'>{event.firstDesc}</div>
                {/*  
                <div className='event__secondDescription'></div>
                <div className='event__ThirdDescription'></div>
                */}
            </div>
        </div>
    )
}
