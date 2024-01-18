import foto from "../assets/foto_equipo.jpg";

const QuienesSomos = () => {
  return (
    <section id="quienessomos">
      <img src={foto} alt="Fotografia de los trabajadores" />
      <div className="text-container">
        <h2>Quiénes Somos</h2>
        <p>
          Descubre la esencia de la innovación y el compromiso ambiental con
          nuestra empresa galardonada. Nos enorgullece presentar una
          organización pionera que ha sido reconocida repetidamente por sus
          notables contribuciones a la sostenibilidad y el respeto por nuestro
          precioso entorno. <br />
          <br />
          Desde el diseño de nuestros productos hasta las operaciones diarias,
          cada decisión está impulsada por el respeto por la naturaleza y el
          deseo de hacer del mundo un lugar mejor. Hemos sido reconocidos por
          nuestras iniciativas revolucionarias que van más allá de lo
          convencional, estableciendo estándares elevados en la industria para
          fomentar la responsabilidad medioambiental.
        </p>
      </div>
    </section>
  );
};

export default QuienesSomos;
