import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UpdateProduct } from "./UpdateProduct";

export function EditProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const getBrands = () => {
        fetch("http://127.0.0.1:5000/products/" + id)
            .then((response) => response.json())
            .then(dt => setProduct(dt))
    }
    useEffect(getBrands, [id]);

    return (
        product ? <UpdateProduct product={product} /> : ""
    );
}

