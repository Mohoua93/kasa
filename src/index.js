import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // ✅ Importation de BrowserRouter
import "./styles/global.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* ✅ Ajout de BrowserRouter autour de <App /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



