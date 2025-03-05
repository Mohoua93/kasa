import React from 'react';
import logo from '../assets/LOGO.png'; // ✅ Assure-toi que le logo est bien dans `assets`
import '../styles/Header.css'; // Assure-toi que le fichier CSS est bien importé
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Kasa Logo" />
            </div>
            <div className="navbar-buttons">
                <button className="navbar-button"><Link to="/">Accueil</Link></button>
                <button className="navbar-button"><Link to="/About">A propos</Link></button>
            </div>
        </div>
    );
}

