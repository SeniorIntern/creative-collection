import React from "react";
import "../assets/styles/Footer.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__contents">
                {/* about us */}
                <div className="about__us footer__part">
                    <h4>About Us</h4>
                    <div className="info">
                        <p className="contents__paragraph">
                            Chaudhary Group is headquartered in Kathmandu; We
                            provide world-class services and products in various
                            fields such as hotels and resorts, education,
                            realty, FMCG (food & beverage), financial services,
                            consumer electronics, cement, hydropower, and EPC.
                        </p>
                    </div>

                    <div className="footer__contact">
                        {/* icons and address */}
                        <h5>
                            <HomeIcon fontSize="small" />
                            <p>www.chaudharygroup.com</p>
                        </h5>

                        <h5>
                            <MailOutlineIcon fontSize="small" />
                            <p> info@chaudharygroup.com</p>
                        </h5>

                        <h5>
                            <LocationOnIcon fontSize="small" />
                            <p> Sanepa,Lalitpur, Nepal</p>
                        </h5>

                        <h5>
                            <CallIcon fontSize="small" />
                            <p> +977–1–5522330</p>
                        </h5>

                        <h5>
                            <FormatAlignJustifyIcon fontSize="small" />
                            <p> Careers</p>
                        </h5>
                    </div>
                </div>
                {/* recent post */}
                <div className="recentPosts footer__part">
                    <h4>Recent Posts</h4>
                    <p className="contents__paragraph">
                        Chaudhary Group is headquartered in Kathmandu; We
                        provide world-class services and products in various
                        fields such as hotels and resorts, education, realty,
                        FMCG (food & beverage), financial services, consumer
                        electronics, cement, hydropower, and EPC.
                    </p>
                </div>

                {/* by creative group: other business */}
                <div className="byCG footer__part">
                    <h4>By Chaudhary Group </h4>
                    <p className="contents__paragraph">
                        Chaudhary Group is headquartered in Kathmandu; We
                        provide world-class services and products in various
                        fields such as hotels and resorts, education, realty,
                        FMCG (food & beverage), financial services, consumer
                        electronics, cement, hydropower, and EPC.
                    </p>
                </div>
            </div>
            <hr style={{ width: "100%" }} />
            <div className="footer__copyright">
                <p>© Copyright 2022. All Rights Reserved</p>
                <p>Design & Developed by ABC</p>
            </div>
        </div>
    );
}
