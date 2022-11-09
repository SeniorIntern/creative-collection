import React from "react";
import Event from "./Event";
import event1 from "../assets/images/Event1.jpg";
import event2 from "../assets/images/Event2.jpg";
import event3 from "../assets/images/Event3.jpg";
import "../assets/styles/Events.css";

export default function Events() {
    return (
        <div className="events">
            <h1 className="eventTitle">
                Welcome to Our Events Archieve
            </h1>
            <div className="events__list">
                <Event
                    id="1"
                    title="Celebrating Annual Anniversary 2022"
                    image={event1}
                />

                <Event
                    id="2"
                    title="Happy Thanksgiving Program 2022"
                    image={event2}
                />

                <Event
                    id="3"
                    title="Holly Celebration by Creative Group - 2022"
                    image={event3}
                />
            </div>
        </div>
    );
}
