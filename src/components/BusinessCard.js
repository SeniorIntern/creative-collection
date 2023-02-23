import React from 'react';
import '../assets/styles/BusinessVertical.css';

export const BusinessCard = ({ title, description, imgUrl }) => {
  return (
    <div className="container__businessCard">
      <div className="business__imgBox">
        <img src={imgUrl} className="business__img" />
        <div className="business__text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};
