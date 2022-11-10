import React from "react";
import Event from "./Event";
import event1 from "../assets/images/Event1.jpg";
import event2 from "../assets/images/Event2.jpg";
import event3 from "../assets/images/Event3.jpg";
import event4 from "../assets/images/Event4.jpg";
import event5 from "../assets/images/Event5.jpg";
import "../assets/styles/Events.css";

export default function Events() {
    // Object for Event
    const events = [
        {
            title: "Celebrating Annual Anniversary 2022",
            image: event1,
        },
        {
            title: "Happy Thanksgiving Program 2022",
            image: event2,
        },
        {
            title: "Holly Celebration by Creative Group - 2022",
            image: event3,
        },
        {
            title: "Happy Thanksgiving Program 2022",
            image: event4,
        },
        {
            title: "Happy Thanksgiving Program 2022",
            image: event5,
        },
        {
            title: "Happy Thanksgiving Program 2022",
            image: event5,
        },
        {
            title: "Happy Thanksgiving Program 2022",
            image: event5,
        },
    ];
    
    return (
        <div className="events">
            <h1 className="eventTitle">Welcome to Our Events Archieve</h1>
            <div className="events__list">
                {events.map((event, index) => {
                    return <Event key={index} {...event} />;
                })}
            </div>
        </div>
    );
}
