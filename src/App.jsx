import "./App.css";
import { Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";

import Experimental from "./components/Experimental";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/"  element={<Inicio />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
    </>
  );
}

export default App;
