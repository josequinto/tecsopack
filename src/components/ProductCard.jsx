export function ProductCard (props) {
  return (
    <div className="product">
      <img src={props.img} alt="" />

      <div className="product-details">
        <h4>{props.name}</h4>
        <p>{props.descripcion}</p>
      </div>
    </div>
  );
};
export function ProductCardAlternativa(props) {
  const bgImage = {
    backgroundImage: `url(${props.img})`
  }
  return (
    <div className="card" style={bgImage}>
      <h2>{props.name}</h2>
    </div>
  );
}


