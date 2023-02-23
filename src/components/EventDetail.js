import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function EventDetail() {
  const { id } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const response = await fetch(`http://localhost:5001/events/get/${id}`);
      setEvents(await response.json());
    };
    getEvents();
  });

  return (
    <div className="eventDetail">
      {events.map((ev) => (
        <div className="events__detail" key={ev.id}>
          <div className="events__title">
            <h4>{ev.title}</h4>
          </div>
          <div className="events__image">
            <img src={ev.ImgOne} alt="events first frame" />
            <div className="date__events">
              <span>August 28, 2022</span>
            </div>
          </div>
          <div className="events__bottom">
            <div className="events__images">
              <img src={ev.ImgTwo} alt="events second frame" />
              <img src={ev.ImgThree} alt="events third frame" />
              <img src={ev.ImgFour} alt="events fourth frame" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
