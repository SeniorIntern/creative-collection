import React from 'react';
import '../assets/styles/HeroContainer.css';
import teamwork from '../assets/images/teamwork.png';
import { NavLink } from 'react-router-dom';

export default function HeroContainer() {
  return (
    <div className="heroContainer">
      <div className="hero__contents">
        <div className="hero__colOne">
          {/* Message */}
          <h3>Taking your Choices</h3>
          <h3>Above The World</h3>
          {/* paragraph */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor.
            <br />
            Vitae ab error earum rerum numquam, dicta, accusamus enim
          </p>
          {/* Buttons */}
          <div className="buttons">
            <p>
              <NavLink
                to="/events"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                View Events
              </NavLink>
            </p>
            <p>
              <NavLink
                to="/"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                Check Products
              </NavLink>
            </p>
          </div>
        </div>
        <div className="hero__colTwo">
          <div className="teamwork__image">
            <img src={teamwork} alt="teamwork" />
          </div>
        </div>
      </div>
    </div>
  );
}
