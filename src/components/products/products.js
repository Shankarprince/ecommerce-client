import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductList } from "./ProductList";

export function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const getProducts = () => {
        fetch("https://electrokart-backend.herokuapp.com/products")
            .then((response) => response.json())
            .then(dt => setProducts(dt))
    }
    useEffect(getProducts, []);

    const deleteProduct = (id) => {
        fetch("https://electrokart-backend.herokuapp.com/products/" + id, {
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
                key={product._id}
                product={product}
                editButton={<button onClick={() => navigate("/products/edit/" + product._id)}>✍</button>}
                deleteButton={<button onClick={() => deleteProduct(product._id)}>❌</button>} />)}</>
        </div>
    );
}

