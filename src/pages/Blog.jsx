import "../styles/Blog.css";
import reverseWave from "../assets/waveReverse.svg";

const Blog = () => {
  return (
    <div id="blog">
      <div id="spaceContact"></div>
      <img src={reverseWave} alt="" />

      <div className="entrada-blog">
        <a
          href="https://www.elpais.com.co/contenido/tecsopack-amigos-del-medio-ambiente.html"
          target="_blank"
        >
          <img
            src="https://www.elpais.com.co/resizer/WS14RiO5Ts7GsKUtmFUjgIFlboA=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/SWBAHCSOTBGUBPHCEZT5NLZTVQ.jpg"
            alt=""
          />
        </a>

        <div className="info-entrada-blog">
          <div>
            <a
              href="https://www.elpais.com.co/contenido/tecsopack-amigos-del-medio-ambiente.html"
              target="_blank"
            >
              <h3>Tecsopack, amigos del medio ambiente</h3>
            </a>
            <p>
              Esta empresa caleña nace el 9 de abril del 2019, gracias a Laura
              Castrillón Cortés, Andrea Concha Freire y Juan David López
              Valencia, egresados del programa de Mercadeo y Negocios
              Internacionales de la Universidad Autónoma de Occidente y Anthony
              Victoria, egresado de Ingeniería Industrial de la Universidad del
              Valle. Motivados por la creciente necesidad de crear empaques que
              satisficieran las demandas de los consumidores y que fuesen una
              alternativa a la contaminación que genera el plástico, dieron vida
              a Tecsopack. Actualmente el equipo de trabajo directo está
              conformado por seis personas y alrededor de quince colaboradores
              indirectos.
            </p>
          </div>
          <div className="pie-info-entrada">
            <i>22 de noviembre de 2021 Por: Elpais.com.co</i>
            <a
              href="https://www.elpais.com.co/contenido/tecsopack-amigos-del-medio-ambiente.html"
              target="_blank"
            >
              Leer más
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="entrada-blog">
        <a
          href="https://forbes.co/2022/07/13/actualidad/listado-25-pymes-exitosas-de-colombia"
          target="_blank"
        >
          <img
            src="https://forbes.co/_next/image?url=https%3A%2F%2Fcdn.forbes.co%2F2022%2F07%2F1200x675.jpg%3Fv%3D1200675&w=1200&q=75"
            alt=""
          />
        </a>

        <div className="info-entrada-blog">
          <div>
            <a
              href="https://forbes.co/2022/07/13/actualidad/listado-25-pymes-exitosas-de-colombia"
              target="_blank"
            >
              <h3>Listado| 25 pymes exitosas de Colombia</h3>
            </a>
            <p>
              Las pequeñas y medianas empresas son el músculo empresarial de
              Colombia. Según datos de Acopi, el gremio de las mipymes, en el
              país hay cerca de 2,5 millones de mipymes que representan el 90%
              de las empresas colombianas y emplean al 65% de la fuerza laboral
              nacional. Por eso Forbes Colombia decidió destacar su trabajo,
              pues con ideas innovadoras, modelos de negocio disruptivos y
              alianzas clave, las pequeñas y medianas empresas han logrado
              escalar sus negocios dentro y fuera del país, crecer de manera
              continuada y convertirse en las pequeñas gigantes de sus
              industrias.
            </p>
          </div>
          <div className="pie-info-entrada">
            <i>13 de julio de 2022 Por: forbes.co</i>
            <a
              href="https://forbes.co/2022/07/13/actualidad/listado-25-pymes-exitosas-de-colombia"
              target="_blank"
            >
              Leer más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
