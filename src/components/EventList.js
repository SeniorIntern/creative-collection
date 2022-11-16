import React, { useEffect, useState } from 'react'
import Event from './Event'

export default function EventList() {
    const [newsList, setNewsList] = useState([])
    useEffect(() => {
        const getNewsList = async () => {
            const response = await fetch('http://localhost:5001/events/get')
            setNewsList(await response.json())
        }
        getNewsList()
    })

    return (
        <div className='newsList'>
            <h1 className='newsListTitle'>Welcome to Our Events Archieve</h1>
            <div className='newsList__list'>
                {newsList.map((newslist, id) => {
                    return <Event key={id} {...newslist} />
                })}
            </div>
        </div>
    )
}
