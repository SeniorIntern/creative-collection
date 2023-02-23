import React from 'react';
import businessImg1 from '../assets/images/businessImg.png';
import businessImg2 from '../assets/images/businessImg.png';
import businessImg3 from '../assets/images/businessImg.png';
import { BusinessCard } from './BusinessCard';
import '../assets/styles/BusinessVertical.css';

export const BusinessVerticles = () => {
  const businesses = [
    {
      title: 'Creative Boutique',
      description: 'Learn More >>',
      imgUrl: businessImg1,
    },
    {
      title: 'Creative Media',
      description: 'Learn More >>',
      imgUrl: businessImg2,
    },
    {
      title: 'Creative Media',
      description: 'Learn More >>',
      imgUrl: businessImg3,
    },
  ];

  return (
    <div className="businessVerticles">
      <div className="business_list">
        <div className="list">
          {businesses.map((business, index) => {
            return <BusinessCard key={index} {...business} />;
          })}
        </div>
      </div>
    </div>
  );
};
