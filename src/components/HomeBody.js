import React from "react";
import "../assets/styles/HomeBody.css";
import im1 from "../assets/images/R.jfif";
import im2 from "../assets/images/OIP (1).jfif";
import im3 from "../assets/images/OIP.jfif";
import HeroContainer from "./HeroContainer";

export default function HomeBody() {
    return (
        <div className="homeBody">
            <div className="homeBody__container">
                <HeroContainer />
                <div className="gradient__Container" />
            </div>
            <h4>Latest Events</h4>
            <div className="container">
                <div className="left__homebody">
                    <div className="left__homebody__upperContainer">
                        <div className="container__uppercontainer__image">
                            <img className="homeBodyImg" src={im1} alt="" />
                            <div className="bottom__left">
                                Here is something
                            </div>
                        </div>
                    </div>
                    <div className="left__homebody__lowerContainer">
                        <div className="left__homebody__lowerContainer__containers">
                            <img src={im2} className="homeBodyImg" alt="" />
                        </div>
                        <div className="left__homebody__lowerContainer__containers">
                            <img src={im3} className="homeBodyImg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="right__homebody">
                    <div className="right__homebody__container">
                        <h5> What's hot</h5>

                        <div className="right__homebody__component">
                            <img src={im1} alt="" />
                            <p className="homebody__time">2 hrs ago</p>
                            <p className="homebodycontents">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                        <div className="right__homebody__component">
                            <img src={im1} alt="" />
                            <p className="homebody__time">2 hrs ago</p>
                            <p className="homebodycontents">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
