import React from 'react';
import Annonce from './Annonce';
import Footer from '../components/Footer';

const data = {
  titre: "Loft cosy sur le Canal Saint-Martin",
  localisation: "Ile de France - Paris 10e",
  note: 4,
  image: "https://example.com/image.jpg",
  hébergeur: {
    nom: "John Doe",
    photo: "https://example.com/host.jpg"
  },
  tags: ["Charmant", "Spacieux", "Central"],
  description: "Profitez d'un séjour confortable dans ce loft moderne et lumineux...",
  equipments: ["Wi-Fi", "Climatisation", "Cuisine équipée"] // Assure-toi que le nom est 'équipements' comme dans le composant Annonce
};

const App = () => {
  return (
    <div className="App">
      <Annonce
        titre={data.titre}
        location={data.localisation}
        rating={data.note}
        image={data.image}
        host={data.hébergeur}
        tags={data.tags}
        description={data.description}
        équipements={data.équipements} // Utilise le même nom que dans le composant Annonce
      />
      <Footer/>
    </div>
  );
};

export default App;


