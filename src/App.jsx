import "./App.css";
import { Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/"  element={<Inicio />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    </>
  );
}

export default App;
