import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Brands() {

    let navigate = useNavigate();
    const [brands, setBrands] = useState([]);

    const getBrands = () => {
        fetch("https://6170424123781c001728996d.mockapi.io/brands")
            .then((response) => response.json())
            .then(dt => setBrands(dt))
    }

    useEffect(getBrands, []);

    const deleteBrand = (id) => {
        fetch("https://6170424123781c001728996d.mockapi.io/brands/" + id, {
            method: "DELETE"
        })
        .then(getBrands)
    }

    return (
        <div className="brand-container">
            <button className="brand-add-button"><Link to="/brands/add">Add Brand</Link></button>
            {brands.map((br) => <BrandsList
                key={br.id}
                id={br.id}
                brandName={br.name}
                editButton={<button className="brand-edit-button" onClick={() => navigate("/brands/edit/" + br.id)}>✍</button>}
                deleteButton={<button className="brand-delete-button" onClick={() => deleteBrand(br.id)}>❌</button>}
            />)}
        </div>
    );
}

export function BrandsList({ id, brandName, editButton, deleteButton }) {

    let navigate = useNavigate();

    return (
        <div className="brand-list-container">
            <button className="brand-list-button" id={id} onClick={() => navigate("/brands/" + id)} >{brandName}</button>
            {editButton}
            {deleteButton}
        </div>
    );
}