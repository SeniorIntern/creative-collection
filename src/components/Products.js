import React from 'react'
import '../assets/styles/Products.css'
import itGuy from '../assets/images/IT-Guy.svg'
import Development from '../assets/images/Development.svg'

export default function Products() {
    return (
        <div className='services'>
            <div className='our__service'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                    <path
                        fill='#0099ff'
                        fill-opacity='1'
                        d='M0,288L80,277.3C160,267,320,245,480,202.7C640,160,800,96,960,90.7C1120,85,1280,139,1360,165.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
                    ></path>
                </svg>
                <h4>Our Services</h4>
            </div>
            <div className='row__one'>
                <div className='left__column img_main_center'>
                    <img src={itGuy} alt='' />
                </div>
                <div className='right__column'>
                    <div className='service'>
                        <b>Event management</b>
                        <p>
                            CBC is a one stop solution for every events. Once
                            one organizer get in touch with us then from our
                            platform. We provide all solution for every event we
                            are specialized on corporate event, sports event,
                            school event, and all kind of event.
                        </p>
                    </div>
                    <div className='service'>
                        <b>Branding</b>
                        <p>
                            Branding is the process of creating a strong,
                            positive perception of a company, its products or
                            services in the customer's mind by combining such
                            elements as logo, design, mission statement, and a
                            consistent theme throughout all marketing
                            communications.
                        </p>
                    </div>
                    <div className='service'>
                        <b>Promotions</b>
                        <p>
                            Our team is expert for indoor , out door and digital
                            promotions. Now the era has been changed the way of
                            promotions has also get changed. Every day new ways
                            of promotions are being introduced and for every
                            client its abit difficult to be updated so we are
                            the solution for it as well
                        </p>
                    </div>
                    <div className='service'>
                        <b>Artistic Management</b>
                        <p>
                            Artist management and appointing brand ambassador
                            are always a tuff job. For every business and
                            function all artist may no be suitable and might be
                            out of budget so we provide best deals on this as
                            well.
                        </p>
                    </div>
                    <div className='service'>
                        <b>Promotional Merchandise</b>
                        <p>
                            Promotional merchandise generating is the field of
                            our expertise. We deal with every kind of creative
                            and innovative merchandise that can attract the
                            costumer attraction.
                        </p>
                    </div>
                    <div className='service'>
                        <b>Business Survey</b>
                        <p>
                            Nowadays, more than starting a business running it
                            smoothly has become the most difficult task. To run
                            business smoothly it need in-depth research on
                            client costumer acquisition , customer retention
                            ratio, results of our promotions and its
                            redefinition.
                        </p>
                    </div>
                </div>
            </div>
            <div className='row__Two'>
                <div className='left__column'>
                    <h4 style={{ marginBottom: '0.8em' }}>
                        What your customer say?
                    </h4>
                    <p>
                        If you want a successful online business these days,
                        it’s not enough to simply close the sale. You’ve got to
                        help your customers fall in love with your business.i
                        found Aarambha IT as best one in town to solve my
                        problem. Manager, Pokhara Research Center.
                    </p>
                    <p>
                        We've been blown away by the incredible value you
                        deliver, and how your work has translated into increased
                        page view times, lead generations, and dramatic
                        decreases in bounce rate and required support. Prem
                        Gurung, Manager, Infinity Advatures.
                    </p>
                    <p>
                        Your team consistently goes above and beyond our
                        expectations, and everything we've worked on with you
                        has been a complete success. You're absolutely
                        invaluable to our national organization, and we look
                        forward to continuing to work with you as strategic
                        partners in the years to come. Manager, Hotel Himalayan
                        Deurali.
                    </p>
                    <p>
                        I’ve had some questionable experiences with other web
                        agencies in the past, but AarambhaIT Research Center has
                        hands down been the best web company we’ve worked with,
                        providing us with peace of mind and incredible service.
                        Managing director, Singing bowl and statue.
                    </p>
                </div>
                <div className='right__column img_main_center'>
                    <img src={Development} alt='' />
                </div>
            </div>
        </div>
    )
}
