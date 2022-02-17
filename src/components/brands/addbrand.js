import { Brands } from './brands.js';
import { Nav } from '../misc/nav.js';
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';

export function AddBrand() {
    const navigate = useNavigate();

    const getValidate = (values) => {
        const errors = {};
        if (!values.name) errors.name = "Required";
        return errors;
    }
    const getSubmit = (values) => {
        fetch("https://electrokart-backend.herokuapp.com/brands", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => navigate("/"))
    }
    const formik = useFormik({
        initialValues: { name: "" },
        validate: getValidate,
        onSubmit: getSubmit
    })

    return (
        <>
            <div><Nav /></div>
            <div className="home-container">
                <Brands />
                <div className="brand-add-container">
                    <form className="brand-form-container" onSubmit={formik.handleSubmit}>
                        <h2>Add New Brand</h2>
                        <input id="name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Brand Name..."></input>
                        <p>{formik.touched.name && formik.errors.name && formik.errors.name}</p>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}