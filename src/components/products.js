import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Products() {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const getProducts = () => {
        fetch("https://6170424123781c001728996d.mockapi.io/products")
            .then((response) => response.json())
            .then(dt => setProducts(dt))
    }

    useEffect(getProducts, []);

    const deleteProduct = (id) => {
        fetch("https://6170424123781c001728996d.mockapi.io/products/" + id, {
            method: "DELETE"
        })
            .then(getProducts)
    }

    return (
        <div className="products-container">
            <div className="products-header">
                <h2>All Brands</h2>
                <p onClick={() => navigate("/products/add")}>Add Product</p>
            </div>
            <>{products.map(product => <ProductList
                key={product.id}
                product={product}
                editButton={<button onClick={() => navigate("/products/edit/" + product.id)}>✍</button>}
                deleteButton={<button onClick={() => deleteProduct(product.id)}>❌</button>} />)}</>
        </div>
    );
}

function ProductList({ product, editButton, deleteButton }) {
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