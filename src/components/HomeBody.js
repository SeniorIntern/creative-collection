import React, { useEffect, useState } from 'react'
import '../assets/styles/HomeBody.css'
import HeroContainer from './HeroContainer'
import { NavLink } from 'react-router-dom'

export default function HomeBody() {
    const [homeNews, setHomeNews] = useState([])
    useEffect(() => {
        const getHomeNews = async () => {
            const hResponse = await fetch('http://localhost:5001/home/news')
            setHomeNews(await hResponse.json())
        }
        getHomeNews()
    }, [])

    const [homeEventList, setHomeEventList] = useState([])
    useEffect(() => {
        const getHomeEventList = async () => {
            const hResponses = await fetch('http://localhost:5001/home/events')
            setHomeEventList(await hResponses.json())
        }
        getHomeEventList()
    }, [])

    return (
        <div className='homeBody'>
            <div className='homeBody__container'>
                <HeroContainer />
                <div className='gradient__Container' />
            </div>
            <h4>Upcoming Events News</h4>
            {console.table(homeNews)}

            <div className='container'>
                {/* LEFT COLUMN */}
                <div className='left__homebody'>
                    <div className='left__homebody__upperContainer'>
                        {homeNews.map((he, id) => (
                            <div
                                className='container__uppercontainer__image'
                                key={id}
                            >
                                <img
                                    className='homeBodyImg'
                                    src={he.firstImageUrl}
                                    alt=''
                                />
                                <NavLink className='link' to={`/news/${he.id}`}>
                                    <div className='bottom__left'>
                                        {he.title}
                                    </div>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='right__homebody'>
                    <div className='right__homebody__container'>
                        <h5>Recent Events</h5>
                        {homeEventList.map((hes, id) => (
                            <NavLink className='link' to={`/events/${hes.id}`}>
                                <div className='right__homebody__component'>
                                    <img src={hes.ImgOne} alt='' />

                                    <p className='homebodycontents'>
                                        {hes.title}
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
