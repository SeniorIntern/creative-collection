import React from "react";
import "../assets/styles/About.css";
import mate1 from "../assets/images/Demin.PNG";
import mate2 from "../assets/images/Subash.PNG";
import mate3 from "../assets/images/Rajesh.PNG";
import mate4 from "../assets/images/Bipin.PNG";
import mate5 from "../assets/images/Shiva.PNG";
import pen from "../assets/images/icons/pen.png";
import send from "../assets/images/icons/send.png";
import smartphone from "../assets/images/icons/smartphone.png";
import video from "../assets/images/icons/video.png";

export default function About() {
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
                        <img src={pen} alt="" className="circle__img" />
                        <p>Mobile Development </p>
                    </div>
                    <div className="col">
                        <img src={send} alt="" className="circle__img" />
                        <p>Graphics Design</p>
                    </div>
                    <div className="col">
                        <img src={smartphone} alt="" className="circle__img" />
                        <p>Motion Graphics</p>
                    </div>
                    <div className="col">
                        <img src={video} alt="" className="circle__img" />
                        <p>Email Marketing</p>
                    </div>
                </div>
            </div>
            <div className="about_ceo"></div>
            <div className="about_proudteammates">
                <h4>WE ARE PROUD</h4>
                <div className="teammate_photos">
                    {/* SETUP PROPS LATER */}
                    <p>
                        <img src={mate1} alt="Ram" />
                        <p>Demin Giri</p>
                    </p>
                    <p>
                        <img src={mate2} alt="Subash" />
                        <p>Subash Gurung</p>
                    </p>
                    <p>
                        <img src={mate3} alt="Rajesh" />
                        <p>Rajesh Koirala</p>
                    </p>
                    <p>
                        <img src={mate4} alt="Bipin" />
                        <p>Bipin Thapa</p>
                    </p>
                    <p>
                        <img src={mate5} alt="Shiva" />
                        <p>Shiva Khanal</p>
                    </p>
                </div>
            </div>
        </div>
    );
}
