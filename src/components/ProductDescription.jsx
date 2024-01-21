const ProductDescription = ({presentacion, datos}) => {
    return (
        <div className="cardDescription">
        <h4>{presentacion}</h4>
        <ul>
          {datos.map(medida=><li>{medida}</li>)}          
        </ul>
        </div>
    )
}

export default ProductDescription;