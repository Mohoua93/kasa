import React from 'react';
import AppRoutes from './routes/AppRoutes'; // ✅ On importe les routes

const App = () => {
  return (
    <div className="App">
      <AppRoutes /> {/* ✅ On affiche les routes, ce qui permet d'accéder aux pages via React Router */}
    </div>
  );
};

export default App;




