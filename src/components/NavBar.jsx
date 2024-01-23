import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import SocialNav from "./SocialNav";
import "../styles/NavBar.css";

import Logo from "../assets/logo.png";
import LogoB from "../assets/Logo_Blanco.png";

const NavBar = () => {
  const initialState = {
    logo: Logo,
    color: { color: "white" },
  };

  const [navTheme, setNavTheme] = useState(() => {
    const storedState = localStorage.getItem("navbarState");
    return storedState ? JSON.parse(storedState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("navbarState", JSON.stringify(navTheme));
  }, [navTheme]);

  return (
    <nav id="navbar">
      <Link to="/">
        <img
          src={navTheme.logo}
          alt="Logo en blanco"
          id="Logo"
          onClick={() => setNavTheme({ logo: LogoB, color: { color: "white" } })}
        />
      </Link>
      <div id="navLinks">
        <NavLink
          to="/"
          activeclassname="active"
          onClick={() => setNavTheme({ logo: LogoB, color: { color: "white" } })}
          style={navTheme.color}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/productos"
          activeclassname="active"
          onClick={() => setNavTheme({ logo: Logo, color: { color: "black" } })}
          style={navTheme.color}
        >
          Productos
        </NavLink>
        <NavLink
          to="/contacto"
          activeclassname="active"
          onClick={() => setNavTheme({ logo: LogoB, color: { color: "white" } })}
          style={navTheme.color}
        >
          Contacto
        </NavLink>
      </div>
      {/* <SocialNav /> */}
    </nav>
  );
};

export default NavBar;

