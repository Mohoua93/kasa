// import React from "react";
// import './Home.css';
// import logo from "./LOGO.png";
// import featuredImage from "./home-pics.png"; // Assurez-vous que cette image est dans le bon dossier

// const Home = () => {
//     return (
//         <div>
//             <div className="navbar">
//                 <div className="navbar-logo">
//                     <img src={logo} alt="Kasa Logo" />
//                 </div>
//                 <div className="navbar-buttons">
//                     <button className="navbar-button">Accueil</button>
//                     <button className="navbar-button">A propos</button>
//                 </div>
//             </div>
            
//             <section className="image-section">
//                 <img src={featuredImage} alt="Featured" className="featured-image"/>
//             </section>
//         </div>
//     );
// };

// export default Home;

import React from "react";
import './Home.css';
import logo from "./LOGO.png";
import featuredImage from "./home-pics.png"; // Assurez-vous que cette image est dans le bon dossier
import logements from "./Asset/logements.json"; // Importer les données JSON

const Home = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="Kasa Logo" />
                </div>
                <div className="navbar-buttons">
                    <button className="navbar-button">Accueil</button>
                    <button className="navbar-button">A propos</button>
                </div>
            </div>
            
            <section className="image-section">
                <img src={featuredImage} alt="Featured" className="featured-image"/>
            </section>

            <section className="gallery">
                {logements.map((logement) => (
                    <div key={logement.id} className="gallery-item">
                        <img src={logement.image} alt={logement.title} />
                        <div className="gallery-item-title">{logement.title}</div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Home;


