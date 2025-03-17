import React from 'react';
import logo from '../assets/LOGO.png';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Kasa Logo" />
            </div>
            <div className="navbar-buttons">
                <Link to="/" className="navbar-button">Accueil</Link>
                <Link to="/About" className="navbar-button">À propos</Link>
            </div>
        </div>
    );
}


