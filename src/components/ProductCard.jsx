const ProductCard = ({name, img, onClick}) => {
  const style = {
    backgroundImage: `url(${img})`,
  }
  return (
    <div className="card" style={style} onClick={onClick}>
      <h2>{name}</h2>
    </div>
  );
};

export default ProductCard;
