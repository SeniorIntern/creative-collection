import React, { useEffect, useState } from 'react'
import '../assets/styles/About.css'
import ceoImage from '../assets/images/ram-krishna.jpg'
import manish from '../assets/images/manish-jeshwal.jpg'
import rakesh from '../assets/images/rakesh-shrestha.jpg'
import sagar from '../assets/images/sagar-acharya.jpg'
import ram from '../assets/images/ram-krishna.jpg'

export default function About() {
    const shortMessage =
        'As I am working on the field for the event for the many years. Looking at the data’s event management might be the one of the backbone to enhance the tourism of Nepal as well as gandaki provenance. While inviting national companies to pokhara for their evet I always feel organizer prefer to work with a synchronized team rather then working with the many company then I come up with the concept of Creative business consultancy and thank you to all the companies and vendors who support me for the collaboration and joining hands for this new venture.'

    const [message, setMessage] = useState(shortMessage)
    const readmore = () => {
        document.getElementById('ceo__intro').style =
            'overflow: visible;height:fit-content;'
    }
    const [clickedReadMore, setReadMoreStatus] = useState(false)
    return (
        <div className='about__container'>
            <div className='about__work'>
                <div className='work__intro'>
                    <p>
                        Pokhara is always a hub for the event. Annually pokhara
                        host hundreds of the events from pageants to corporate
                        events to sports event. But looking at the context we
                        always miss the company that comes with the complete
                        package of the event. Then the name burn creative
                        business consultancy with the active participation of
                        the major vendors of the event industry with the aim to
                        give new definition to event management. Creative
                        business consultancy is a collaboration of the event
                        vendors and especially focused on quality results in the
                        budget of the organizer. CBC is especially a team of
                        experts from where client can ask for all the management
                        of the event or they can give specific job task or they
                        can hire the staff on the related field only.
                    </p>
                </div>
            </div>
            <div className='about_ceo'>
                <div className='ceo__container'>
                    <div className='ceo__container__left'>
                        <div className='ceo__image'>
                            <img src={ceoImage} alt='' />
                        </div>
                    </div>
                    <div className='ceo__container__right'>
                        <h4>Mr. Ramkrishna Poudel</h4>
                        <h5>CEO</h5>

                        <div className='ceo__readmore'>
                            <p id='ceo__intro'>{message}</p>
                            <button className='btn' onClick={readmore}>
                                Read More...
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about_proudteammates'>
                <h4>Team Of Creative Group</h4>
                <div className='members'>
                    {/* SETUP PROPS LATER */}
                    <div className='member'>
                        <p>
                            <img
                                src={manish}
                                alt='Manish Jeshwal'
                                className='team__pic'
                            />
                            <p>Manish Jeshwal</p>
                            <p>"Creative Head"</p>
                        </p>
                    </div>
                    <div className='member'>
                        <p>
                            <img
                                src={rakesh}
                                alt='rakesh shrestha'
                                className='team__pic'
                            />
                            <p>Rakesh Shrestha</p>
                            <p>"MD"</p>
                        </p>
                    </div>
                    <div className='member'>
                        <p>
                            <img
                                src={sagar}
                                alt='sagar-acharya'
                                className='team__pic'
                            />
                            <p>Sagar Acharya</p>
                            <p>"Content Creator"</p>
                        </p>
                    </div>
                    <div className='member'>
                        <p>
                            <img
                                src={ram}
                                alt='ram-krishna'
                                className='team__pic'
                            />
                            <p>Ram Krishna Poudel</p>
                            <p>"CEO"</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
