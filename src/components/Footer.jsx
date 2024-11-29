import React from 'react';
import './Footer.css';
import Logo from '../Asset/LOGO-W.png';  // Chemin correct vers l'image

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__logo'>
        <img src={Logo} alt="Logo de l'entreprise" />
      </div>
      <div className="footer__text">© 2020 Kasa. Tous droits réservés</div>
    </div>
  );
}

export default Footer;