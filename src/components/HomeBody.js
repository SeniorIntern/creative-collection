import React, { useEffect, useState } from 'react'
import '../assets/styles/HomeBody.css'
import HeroContainer from './HeroContainer'
import { NavLink } from 'react-router-dom'
export default function HomeBody() {
    const [homeEvent, setHomeEvent] = useState([])
    useEffect(() => {
        const getHomeEvents = async () => {
            const hResponse = await fetch('http://localhost:5001/home/event')
            setHomeEvent(await hResponse.json())
        }
        getHomeEvents()
    }, [])

    const [homeEvents, setHomeEvents] = useState([])
    useEffect(() => {
        const getHomeEvents = async () => {
            const hResponses = await fetch('http://localhost:5001/home/events')
            setHomeEvents(await hResponses.json())
        }
        getHomeEvents()
    }, [])

    return (
        <div className='homeBody'>
            <div className='homeBody__container'>
                <HeroContainer />
                <div className='gradient__Container' />
            </div>
            <h4>Latest Events</h4>
            {console.table(homeEvent)}

            <div className='container'>
                {/* LEFT COLUMN */}
                <div className='left__homebody'>
                    <div className='left__homebody__upperContainer'>
                        {homeEvent.map((he, id) => (
                            <div
                                className='container__uppercontainer__image'
                                key={id}
                            >
                                <img
                                    className='homeBodyImg'
                                    src={he.firstImageUrl}
                                    alt=''
                                />
                                <div className='bottom__left'>{he.title}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='right__homebody'>
                    <div className='right__homebody__container'>
                        <h5>What's hot</h5>
                        {homeEvents.map((hes, id) => (
                            <NavLink className='link' to={`/event/${hes.id}`}>
                                <div className='right__homebody__component'>
                                    <img src={hes.firstImageUrl} alt='' />

                                    <p className='homebodycontents'>
                                        {hes.firstDesc}...
                                    </p>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
