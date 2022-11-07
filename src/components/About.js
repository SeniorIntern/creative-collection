import React, { useState } from "react";
import "../assets/styles/About.css";
import mate1 from "../assets/images/Demin.PNG";
import ceoImage from "../assets/images/binod.png";
import mate2 from "../assets/images/Subash.PNG";
import mate3 from "../assets/images/Rajesh.PNG";
import mate4 from "../assets/images/Bipin.PNG";
import mate5 from "../assets/images/Shiva.PNG";
import pen from "../assets/images/icons/pen.png";
import send from "../assets/images/icons/send.png";
import smartphone from "../assets/images/icons/smartphone.png";
import video from "../assets/images/icons/video.png";

export default function About() {
    const shortMessage =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequuntur doloribus accusantium blanditiis aliquam molestias, modi accusamus facilis amet quibusdam et ipsam provident sint quod eligendi fugiat, atque numquam quisquam.";
    const longMessage =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequuntur doloribus accusantium blanditiis aliquam molestias, modi accusamus facilis amet quibusdam et ipsam provident sint quod eligendi fugiat, atque numquam quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequuntur doloribus accusantium blanditiis aliquam molestias, modi accusamus facilis amet quibusdam et ipsam provident sint quod eligendi fugiat, atque numquam quisquam.";

    const [message, setMessage] = useState(shortMessage);

    const readMore = () => {
        setMessage(longMessage);
    };

    return (
        <div className="about__container">
            <div className="about__work">
                <div className="work__intro">
                    <h4 className="shadow">HOW WE WORK</h4>
                    <p>
                        We offer a wide branch services, from the most simple to
                        the most complex. Our Goal is to meet the needs of our
                        customers by offering intelligent solutions.
                    </p>
                </div>
                <div className="work__scope">
                    <div className="col">
                        <div className="circle__img">
                            <img src={pen} alt="" />
                        </div>
                        <h5>Mobile Development </h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                        </p>
                    </div>
                    <div className="col">
                        <div className="circle__img">
                            <img src={send} alt="" />
                        </div>
                        <h5>Graphics Design</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                        </p>
                    </div>
                    <div className="col">
                        <div className="circle__img">
                            <img src={smartphone} alt="" />
                        </div>
                        <h5>Motion Graphics</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                        </p>
                    </div>
                    <div className="col">
                        <div className="circle__img">
                            <img src={video} alt="" />
                        </div>
                        <h5>Email Marketing</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about_ceo">
                <div className="ceo__container">
                    <div className="ceo__container__left">
                        <div className="ceo__image">
                            <img src={ceoImage} alt="" />
                        </div>
                    </div>
                    <div className="ceo__container__right">
                        <h4>Mr. Balram Poudel</h4>
                        <h5>CEO</h5>
                        <p>{}</p>

                        <div className="ceo__readmore">
                            <p>{message}</p>
                            <button className="btn" onClick={() => readMore()}>
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_proudteammates">
                <h4>WE ARE PROUD</h4>
                <div className="teammate_photos">
                    {/* SETUP PROPS LATER */}
                    <p>
                        <img src={mate1} alt="Ram" className="team__pic" />
                        <p>Demin Giri</p>
                    </p>
                    <p>
                        <img src={mate2} alt="Subash" className="team__pic" />
                        <p>Subash Gurung</p>
                    </p>
                    <p>
                        <img src={mate3} alt="Rajesh" className="team__pic" />
                        <p>Rajesh Koirala</p>
                    </p>
                    <p>
                        <img src={mate4} alt="Bipin" className="team__pic" />
                        <p>Bipin Thapa</p>
                    </p>
                    <p>
                        <img src={mate5} alt="Shiva" className="team__pic" />
                        <p>Shiva Khanal</p>
                    </p>
                </div>
            </div>
        </div>
    );
}
