import { ProductCard, ProductCardAlternativa } from "./ProductCard";

import producto1 from "../assets/producto1.jpg";
import producto2 from "../assets/producto2.jpg";
import producto3 from "../assets/producto3.jpg";
import producto4 from "../assets/producto4.jpg";

const Productos = () => {
  return (
    <section id="productos">
      <h2>Productos</h2>
      <article>
        <ProductCardAlternativa name="Línea convencional" img={producto1} />
        <ProductCardAlternativa name="Línea industrial" img={producto2} />
        <ProductCardAlternativa name="Línea genérica" img={producto3} />
        <ProductCardAlternativa name="Línea Food Service"  img={producto4}/>
      </article>
      {/* <article>
        <ProductCard name="Línea convencional" img={producto1} />
        <ProductCard name="Línea industrial" img={producto2} />
        <ProductCard name="Línea genérica" img={producto3} />
        <ProductCard name="Línea Food Service" img={producto4} />
      </article> */}
    </section>
  );
};

export default Productos;
