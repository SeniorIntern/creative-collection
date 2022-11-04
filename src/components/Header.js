import React from "react";
import "../assets/styles/Header.css";
import logo from "../assets/images/site__logo.png";
export default function Header() {
    return (
        <div className="header">
            <div className="header__contents">
                <div className="content__left">
                    <div className="header__logo">
                        <img src={logo} alt="site logo" className="logo" />
                    </div>
                    <div className="flex-need">
                        <nav className="header__navOption ">
                            <ul className="routeOptions">
                                <li>Our Products</li>
                                <li>About Us</li>
                                <li>Events & News</li>
                                <li>Contact Us</li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="content__right flex-need">
                    <div className="user__action ">
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
