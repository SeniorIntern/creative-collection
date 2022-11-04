import React from "react";
import "./assets/styles/App.css";
import Header from "./components/Header";
import HeroContainer from "./components/HeroContainer";
import HomeBody from "./components/HomeBody";

export default function App() {
    return (
        <div className="app">
            <div className="app__container">
                {/* Header */}
                <Header />
                {/* Hero Image */}
                <HeroContainer />
                {/* react router dom */}
                <HomeBody />
                {/* Footer */}
            </div>
        </div>
    );
}
