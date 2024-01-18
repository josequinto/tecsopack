const Contacto = () => {
  return (
    <section id="Contacto">
      <h2>Contacto</h2>
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
          <textarea cols="30" rows="10" placeholder="Pregúnta" ></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
