import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import '../assets/styles/NewsDetail.css'

export default function NewsDetail() {
    const { id } = useParams()
    const [news, setNews] = useState([])

    useEffect(() => {
        const getNews = async () => {
            const response = await fetch(`http://localhost:5001/news/get/${id}`)
            setNews(await response.json())
        }
        getNews()
    })

    return (
        <div className='newsDetail'>
            {news.map((ev) => (
                <div className='news__detail' key={ev.id}>
                    <div className='news__title'>
                        <h4>{ev.title}</h4>
                    </div>
                    <div className='news__image'>
                        <img src={ev.firstImageUrl} alt='news first frame' />
                        <div className='date__news'>
                            <span>August 28, 2022</span>
                        </div>
                    </div>
                    <div className='news__bottom'>
                        <div className='news__images'>
                            <img
                                src={ev.secondImageUrl}
                                alt='news second frame'
                            />

                            <img
                                src={ev.thirdImageUrl}
                                alt='news third frame'
                            />
                            <img
                                src={ev.fourthImageUrl}
                                alt='news fourth frame'
                            />
                        </div>
                        <div className='news__description'>
                            <div className='news__descriptions'>
                                <h5> {ev.firstDesc}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='news__last_part news__descriptions'>
                        <h5> {ev.secondDesc}</h5>
                        <h5> {ev.thirdDesc}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}
