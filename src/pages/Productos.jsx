import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductDescription from "../components/ProductDescription";
import Gallery from "../components/Gallery";
import "../styles/Productos.css";

import producto1 from "../assets/producto1.jpg";
import producto2 from "../assets/producto2.jpg";
import producto3 from "../assets/producto3.jpg";
import producto4 from "../assets/producto4.jpg";

import wave from "../assets/wave.svg";
const productos = [
  {
    name: "Línea convencional",
    img: producto1,
    laminas: ["21x21", "25x25", "29x29", "34x34", "39x39"],
    bolsas: ["R15 15x15", "R19 17x20", "R20 20x20"],
    bolsillos: ["R15-L 15x15", "R17-L 17x17"],
    portaPapas: ["12.5x12.5"],
    portaCubiertos: ["7.5x22", "7.5x25"],
    fotos: [producto1, producto1, producto1, producto1, producto1, producto1],
  },
  {
    name: "Línea industrial",
    img: producto2,
    laminas: ["n", "25x25", "29x29", "34x34", "39x39"],
    bolsas: ["n 15x15", "R19 17x20", "R20 20x20"],
    bolsillos: ["n R15-L 15x15", "R17-L 17x17"],
    portaPapas: ["12.5x12.5"],
    portaCubiertos: ["7.5x22", "7.5x25"],
    fotos: [producto2, producto2, producto2, producto2, producto2, producto2],
  },
  {
    name: "Línea genérica",
    img: producto3,
    laminas: ["m", "25x25", "29x29", "34x34", "39x39"],
    bolsas: ["m 15x15", "R19 17x20", "R20 20x20"],
    bolsillos: ["m R15-L 15x15", "R17-L 17x17"],
    portaPapas: ["12.5x12.5"],
    portaCubiertos: ["7.5x22", "7.5x25"],
    fotos: [producto3, producto3, producto3, producto3, producto3, producto3],
  },
  {
    name: "Línea Food Service",
    img: producto4,
    laminas: ["l", "25x25", "29x29", "34x34", "39x39"],
    bolsas: ["l 15x15", "R19 17x20", "R20 20x20"],
    bolsillos: ["l R15-L 15x15", "R17-L 17x17"],
    portaPapas: ["12.5x12.5"],
    portaCubiertos: ["7.5x22", "7.5x25"],
    fotos: [producto4, producto4, producto4, producto4, producto4, producto4],
  },
];

const Productos = () => {
  const [descripcion, setDescripcion] = useState(productos[0]);

  const handleProductClick = (product) => {
    setDescripcion(product);
  };

  return (
    <div id="productosPage">
      <section id="productos">
        {productos.map((product, index) => (
          <ProductCard
            key={"productosPage" + index}
            name={product.name}
            img={product.img}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </section>
      <img src={wave} alt="" />
      <h3>{descripcion.name}</h3>
      <div className="descripcionProductos">
        <ProductDescription
          key="Láminas"
          presentacion="Láminas"
          datos={descripcion.laminas}
        />
        <ProductDescription
          key="Bolsas pequeñas"
          presentacion="Bolsas pequeñas"
          datos={descripcion.bolsas}
        />
        <ProductDescription
          key="Bolsillos en L"
          presentacion="Bolsillos en L"
          datos={descripcion.bolsillos}
        />
        <ProductDescription
          key="Porta papas genérico"
          presentacion="Porta papas genérico"
          datos={descripcion.portaPapas}
        />
        <ProductDescription
          key="Porta cubiertos"
          presentacion="Porta cubiertos"
          datos={descripcion.portaCubiertos}
        />
      </div>
      <Gallery fotos={descripcion.fotos} />
    </div>
  );
};

export default Productos;
