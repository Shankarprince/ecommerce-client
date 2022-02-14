import { useEffect, useState } from "react";
import { Brands } from "./brands";
import { Nav } from "../misc/nav";
import { useNavigate, useParams } from "react-router-dom";
import { BrandProductList } from "./BrandProductList.js";

export function BrandProducts() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [brand, setBrand] = useState([]);
    const [products, setProducts] = useState([]);

    const getBrands = () => {
        fetch("http://127.0.0.1:5000/brands/" + id)
            .then((response) => response.json())
            .then(dt => setBrand(dt))
    }
    useEffect(getBrands, [id]);

    const getProducts = () => {
        fetch("http://127.0.0.1:5000/products")
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
                    <>{products.map(dt => <BrandProductList key={dt._id} data={dt} />)}</>
                </div>
            </div>
        </div>
    );
}

