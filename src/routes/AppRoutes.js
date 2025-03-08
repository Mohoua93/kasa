import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Annonce from "../pages/Annonce";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ Ajout de la route pour "/" */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/annonce/:id" element={<Annonce />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;

