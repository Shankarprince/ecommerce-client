export function ProductList({ product, editButton, deleteButton }) {
    return (
        <>
            <div>
                <div className="product-container">
                    <h4>{product.name}</h4>
                    <img className="product-image" src={product.image} alt={product.name}></img>
                    <p><b>{product.brand}</b></p>
                    <p>Rs. {product.price}</p>
                    <p>Release Date: {product.release}</p>
                </div>
                <div className="product-modify-container">
                    {editButton}
                    {deleteButton}
                </div>
            </div>
        </>
    );
}
