import React, { useEffect, useState } from 'react'
import '../assets/styles/HomeBody.css'
import event1 from '../assets/images/Event1.jpg'
import event2 from '../assets/images/Event2.jpg'
import event3 from '../assets/images/Event3.jpg'
import event4 from '../assets/images/Event4.jpg'
import event5 from '../assets/images/Event5.jpg'
import HeroContainer from './HeroContainer'

export default function HomeBody() {
    const [homeEvent, setHomeEvent] = useState([])
    useEffect(() => {
        const getHomeEvents = async () => {
            const hResponse = await fetch('http://localhost:5001/home/event')
            setHomeEvent(await hResponse.json())
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
                                    src={he.imageUrl}
                                    alt=''
                                />
                                <div className='bottom__left'>{he.title}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                {/*
                <div className='right__homebody'>
                    <div className='right__homebody__container'>
                        <div className='right__homebody__component'>
                            <img src={event4} alt='' />
                            <p className='homebody__time'>2 hrs ago</p>
                            <p className='homebodycontents'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>

                        <div className='right__homebody__component'>
                            <img src={event5} alt='' />
                            <p className='homebody__time'>2 hrs ago</p>
                            <p className='homebodycontents'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
                 */}
            </div>
        </div>
    )
}
