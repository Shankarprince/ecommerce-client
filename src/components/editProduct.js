import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Brands } from "./brands";
import { Nav } from "./nav";

export function EditProduct() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const getBrands = () => {
        fetch("https://6170424123781c001728996d.mockapi.io/products/" + id)
            .then((response) => response.json())
            .then(dt => setProduct(dt))
    }

    useEffect(getBrands, [id]);

    return (
        product ? <UpdateProduct product={product} /> : ""
    );
}

function UpdateProduct({ product }) {
    const navigate = useNavigate();
    
    const getValidate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Required";
        }
        return errors;
    }

    const getSubmit = (values) => {
        fetch("https://6170424123781c001728996d.mockapi.io/products/" + product.id, {
            method: "PUT",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => navigate("/"))
    }

    const formik = useFormik({
        initialValues: {
            name: product.name,
            image: product.image,
            brand: product.brand,
            price: product.price,
            release: product.release
        },
        validate: getValidate,
        onSubmit: getSubmit
    })

    return (
        <>
            <div><Nav /></div>
            <div className="home-container">
                <Brands />
                <div className="product-add-container">
                    <form className="product-form-container" onSubmit={formik.handleSubmit}>
                        <h2>Add New Brand</h2>
                        <input id="name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Name..."></input>
                        <input id="image" name="image" value={formik.values.image} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Image URL..."></input>
                        <input id="brand" name="brand" value={formik.values.brand} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Brand Name..."></input>
                        <input id="price" name="price" value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Price..."></input>
                        <input id="release" name="release" value={formik.values.release} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Release Date..."></input>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}