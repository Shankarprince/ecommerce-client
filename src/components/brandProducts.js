import { useEffect, useState } from "react";
import { Brands } from "./brands";
import { Nav } from "./nav";
import { useNavigate, useParams } from "react-router-dom";

export function BrandProducts() {

    const navigate = useNavigate();

    const { id } = useParams();
    const [brand, setBrand] = useState([]);

    const getBrands = () => {
        fetch("https://6170424123781c001728996d.mockapi.io/brands/" + id)
            .then((response) => response.json())
            .then(dt => setBrand(dt))
    }

    useEffect(getBrands, [id]);

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch("https://6170424123781c001728996d.mockapi.io/products")
            .then((response) => response.json())
            .then(dt => {
                const filterData = dt.filter(data => data.brand === brand.name);
                console.log(filterData)
                setProducts(filterData)
            })
    }

    useEffect(getProducts, [brand.name]);

    return (
        <div>
            <Nav />
            <div className="home-container">
                <Brands />
                <div className="products-container">
                    <div className="products-header">
                        <h2>{brand.name}</h2>
                        <p className="products-add-button" onClick={() => navigate("/products/add")}>Add Product</p>
                    </div>
                    <>{products.map(dt => <BrandProductList key={dt.id} data={dt} />)}</>
                </div>
            </div>
        </div>
    );
}

function BrandProductList({ data }) {

    const navigate = useNavigate();

    return (
        <div>
            <div className="product-container">
                <h4>{data.name}</h4>
                <img className="product-image" src={data.image} alt={data.name}></img>
                <p><b>{data.brand}</b></p>
                <p>Rs. {data.price}</p>
                <p>Release Date: {data.release}</p>
            </div>
            <div className="product-modify-container">
                <button onClick={() => navigate("/brands/edit/" + data.id)}>✍</button>
                <button onClick={() => navigate("/brands/delete/" + data.id)}>❌</button>
            </div>
        </div>
    );
}