const ProductDescription = ({presentacion, datos}) => {
    return (
        <div className="cardDescription">
        <h4>{presentacion}</h4>
        <ul>
          {datos.map((medida, index)=><li key={"cardDescription"+index}>{medida}</li>)}          
        </ul>
        </div>
    )
}

export default ProductDescription;