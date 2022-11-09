import React from "react";
import "../assets/styles/HomeBody.css";
import event1 from "../assets/images/Event1.jpg";
import event2 from "../assets/images/Event2.jpg";
import event3 from "../assets/images/Event3.jpg";
import event4 from "../assets/images/Event4.jpg";
import event5 from "../assets/images/Event5.jpg";
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
                            <img className="homeBodyImg" src={event1} alt="" />
                            <div className="bottom__left">
                                Celebrating annual anniversary
                            </div>
                        </div>
                    </div>
                    <div className="left__homebody__lowerContainer">
                        <div className="left__homebody__lowerContainer__containers">
                            <img src={event2} className="homeBodyImg" alt="" />
                        </div>
                        <div className="left__homebody__lowerContainer__containers">
                            <img src={event3} className="homeBodyImg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="right__homebody">
                    <div className="right__homebody__container">
                        <h5> What's hot</h5>

                        <div className="right__homebody__component">
                            <img src={event4} alt="" />
                            <p className="homebody__time">2 hrs ago</p>
                            <p className="homebodycontents">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                        <div className="right__homebody__component">
                            <img src={event5} alt="" />
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
