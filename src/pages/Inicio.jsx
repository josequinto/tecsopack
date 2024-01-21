import "../styles/Inicio.css"
import QuienesSomos from "../components/QuienesSomos";
import Socios from "../components/Socios";
const Inicio = () => {
  return (
    <>
    <section id="inicio">
      <h1>
        Haz del mundo un <strong>lugar mejor </strong>
        <br /> un <strong>envoltorio</strong> a la vez.
      </h1>
    </section>
    <QuienesSomos />
    <Socios />
    </>
  );
};

export default Inicio;
