const ProductCard = ({name, img, onClick}) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
  };
  return (
    <div className="card" style={bgImage} onClick={onClick}>
      <h2>{name}</h2>
    </div>
  );
};

export default ProductCard;
