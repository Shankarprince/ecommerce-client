import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Brands } from "./brands";
import { Nav } from "../misc/nav";

export function EditBrand() {

    const { id } = useParams();

    const [brand, setBrand] = useState(null);

    const getData = () => {
        fetch("http://127.0.0.1:5000/brands/" + id)
            .then((response) => response.json())
            .then(dt => setBrand(dt))
    }

    useEffect(getData, [id]);

    return (
        brand ? <UpdateBrand brand={brand} /> : ""
    );
}

function UpdateBrand({ brand }) {

    const [ name, setName ] = useState(brand.name);
    const navigate = useNavigate();

    const updateMovie = () => {
        console.log(name)
        const updatedMovie = {
            name: name
        }

        fetch("http://127.0.0.1:5000/brands/" + brand._id, {
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: {
                "Content-Type": "application/json"
            }
        }).then( () => navigate("/"))
    }

    return (
        <div>
            <div><Nav /></div>
            <div className="home-container">
                <Brands />
                <div className="add-container">
                    <div className="add-form-container">
                        <h2>Edit Brand Name</h2>
                        <input id="name" name="name" value={name} onChange={ (event) => {
                            console.log(event.target.value);
                            setName(event.target.value)
                        }
                            } ></input>
                        <button onClick={ () => {updateMovie()}}>Submit</button>
                    </div>
                </div>
            </div>
        </div >
    );
}