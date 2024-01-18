// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./App.css";

import Inicio from "./components/Inicio";
import QuienesSomos from "./components/QuienesSomos";
import Socios from "./components/Socios";
import Productos from "./components/Productos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

import Experimental from "./components/Experimental";

function App() {
  return (
    <>
      <Inicio />
      <QuienesSomos />
      <Socios />
      <Productos />
      <Contacto />
      <Footer />

      {/* <Experimental /> */}
    </>
  );
}

export default App;
