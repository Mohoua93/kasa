import React from "react";
import '../css/Home.css'

const Home = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src="logo.png" alt="Kasa Logo" />
            </div>
            <div className="navbar-buttons">
                <button className="navbar-button">Accueil</button>
                <button className="navbar-button">A propos</button>
            </div>
        </div>
    );
};

export default Home;