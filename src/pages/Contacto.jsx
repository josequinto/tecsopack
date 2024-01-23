import "../styles/Contacto.css";
import SocialNav from "../components/SocialNav";
const Contacto = () => {
  return (
    <section id="Contacto">
      {/* <h2>Contacto</h2> */}

      <div id="spaceContact"></div>
      <img src="../assets/waveReverse.svg" alt="" />

      <div id="contactCard">
        <div className="contactoCard">
          <h2 className="tituloContacto">Contactanos</h2>
          <p>contacto@tecsopack.com</p>
          <p>(324) 267 9745</p>
          <a href="https://maps.app.goo.gl/rzeeZN4i9CHTmyUC9" target="_blank">
            <p>Transversal 25d #18 - 57, Comuna 8 <br />
            Cali, Valle del Cauca</p>            
          </a>
        </div>

        <SocialNav />
      </div>
      <h2>Pregunta!</h2>
      <form action="">
        <div className="form-group">
          <label>
            Nombre
            <input type="text" placeholder="John Doe" />
          </label>
          <label>
            Número
            <input type="number" placeholder="302 566-9989" />
          </label>
        </div>
        <label>
          Correo
          <input type="email" name="" id="" placeholder="johndoe@example.com" />
        </label>
        <label htmlFor="">
          Comentarios:
          <textarea cols="30" rows="10" placeholder="Pregúnta"></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
