import React from 'react';
import '../assets/styles/Footer.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import webLogo from '../assets/images/web__logo.png';
import Footerlogoandtext from './Footerlogoandtext';

export default function Footer() {
  return (
    <div className="footer ">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={webLogo} alt="" />
        </div>
        <div className="footer__contents__middle">
          <div className=" footer__contents__middle__sub_Container">
            <h4>Contact Us</h4>
            <div className="footer__contactUs__container">
              <div className="footer__subcontainer">
                <Footerlogoandtext Icon={CallIcon} text={'+977 9812354321'} />
              </div>
              <div className="footer__subcontainer">
                <Footerlogoandtext
                  Icon={MailOutlineIcon}
                  text={'something@gmail.com'}
                />
              </div>
              <div className="footer__subcontainer">
                <Footerlogoandtext
                  Icon={LocationOnIcon}
                  text={'Newroad, pokhara'}
                />
              </div>
            </div>
          </div>
          <div className="footer__contents__middle__sub_Container">
            <h4>Quick Links</h4>
            <div className="footer__subcontainer">
              <a href="/">Home</a>
            </div>
            <div className=" footer__subcontainer">
              <a href="/about">About</a>
            </div>
            <div className=" footer__subcontainer">
              <a href="/products">Our products</a>
            </div>
          </div>
          <div className="footer__contents__middle__Find__Us footer__contents__middle__sub_Container">
            <h4>Find Us</h4>
            <div className="footer__subcontainer">
              <Footerlogoandtext Icon={FacebookIcon} text={'Facebook'} />
            </div>
            <div className="footer__subcontainer">
              <Footerlogoandtext Icon={InstagramIcon} text={'Instagram'} />
            </div>
          </div>
        </div>
        <hr />
        <div className="footer__contents__bottom">
          <h6>Creative Groups. Pvt Ltd All Rights Preserved</h6>
          <div className="threeContainer__box">
            <h6>Terms of Services</h6>
            <h6>Privacy Policy</h6>
            <h6>Terms of use</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
