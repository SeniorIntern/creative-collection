import React from "react";
import binod from "../assets/images/binod.png";
import "../assets/styles/HomeBody.css";

export default function HomeBody() {
    return (
        <div className="homeBody">
            <div className="container">
                <div className="rows">
                    <div className="left__row">
                        <h3>Chairman's Message</h3>
                        <p>
                            With pride and pleasure, I introduce you to
                            Chaudhary Group, a conglomerate that comprises 112
                            companies and 76 brands accross the world.
                        </p>
                        <p>
                            My grandfather, late Mr Bhuramull Chaudhary, laid
                            the foundation of Chaudhary Group in 1870 as a
                            textile business. Today, it has interests in
                            fast-moving consumers goods(FMCG),
                            electronics(consumer durables), education, cement,
                            energy, hospitality, realty development, financial
                            services, telecom, Ayurveda, biotech, and
                            engineering & construction.
                        </p>
                        <p>
                            We are committed to the highest standards in
                            whatever we do. Our quality benchmarks are amongst
                            the best in the world, our ethical standards are
                            high, we are responsive to the needs of our
                            customers and believe in building long-term
                            partnerships with them. We have carried out with
                            distinction our social and environmental
                            responsibilities.
                        </p>
                    </div>
                    <div className="right__row">
                        <img src={binod} alt="" className="binod__img" />
                    </div>
                </div>
            </div>
            <div className="column__two">
                <h2>Business Verticals</h2>
            </div>
        </div>
    );
}
