import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BrandsList } from "./BrandsList";

export function Brands() {
    let navigate = useNavigate();
    const [brands, setBrands] = useState([]);

    const getBrands = () => {
        fetch("https://electrokart-backend.herokuapp.com/brands")
            .then((response) => response.json())
            .then(dt => setBrands(dt))
    }
    useEffect(getBrands, []);

    const deleteBrand = (id) => {
        console.log(id);
        fetch("https://electrokart-backend.herokuapp.com/brands/" + id, {
            method: "DELETE"
        })
        .then(getBrands)
    }

    return (
        <div className="brand-container">
            <button className="brand-add-button"><Link to="/brands/add">Add Brand</Link></button>
            {brands.map((br) => <BrandsList
                key={br._id}
                id={br._id}
                brandName={br.name}
                editButton={<button className="brand-edit-button" onClick={() => navigate("/brands/edit/" + br._id)}>✍</button>}
                deleteButton={<button className="brand-delete-button" onClick={() => deleteBrand(br._id)}>❌</button>}
            />)}
        </div>
    );
}

