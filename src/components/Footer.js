import React from "react";
import "../assets/styles/Footer.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo">{/* <img src={logo} /> */}</div>
            <div className="footer__contents">
                <div className="abc">
                    <div className="footer__contacts">
                        <h4>Contact Us</h4>

                        <h5>
                            <CallIcon fontSize="small" />
                            <p>(+977 9812354321)</p>
                        </h5>

                        <h5>
                            <MailOutlineIcon fontSize="small" />
                            <p>something@gmail.com</p>
                        </h5>

                        <h5>
                            <LocationOnIcon fontSize="small" />
                            <p>Newroad, pokhara</p>
                        </h5>
                    </div>
                </div>

                <div className="footer__quickLinks">
                    <h4>Quick Links</h4>
                    <h5>Home</h5>
                    <h5>About</h5>
                    <h5>Our products</h5>
                </div>
                <div className="footer__stayTouch">
                    <h4>Find Us</h4>
                    <h5>
                        <FacebookIcon fontSize="small" />
                        <p>Facebook</p>
                    </h5>
                    <h5>
                        <InstagramIcon fontSize="small" />
                        <p>Instagram</p>
                    </h5>
                </div>
            </div>
            <hr />
            <div className="footer__copyrightSection abc">
                <div className="footer__copyrightLeft">
                    <p
                        style={{
                            fontWeight: "bold",
                            fontSize: "0.4rem",
                            color: "white",
                        }}
                    >
                        Creative Group. Pvt. Ltd. All Rights Reserved
                    </p>
                </div>
                <div className="footer__copyrightRight">
                    <div className="sp">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Terms of use</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
