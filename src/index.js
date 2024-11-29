import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Annonce from './components/Annonce';
import NotFound from './components/notFound';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/annonce/:id" element={<Annonce />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} /> {/* Route pour About */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

