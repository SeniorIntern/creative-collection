import React, { useState } from "react";
import "../assets/styles/Event.css";

export default function Event({ id, title, image }) {
    const [visible, setVisible] = useState(false);

    function renderBtn() {
        setVisible(!visible);
    }

    return (
        <div className="event">
            <img
                onClick={() => {
                    renderBtn();
                }}
                src={image}
                alt=""
            />
            {visible && (
                <div className="title">
                    <p>{title}</p>
                    <button className="event__btn">Learn More</button>
                </div>
            )}
        </div>
    );
}
