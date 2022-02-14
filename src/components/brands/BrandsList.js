import { useNavigate } from "react-router-dom";


export function BrandsList({ id, brandName, editButton, deleteButton }) {

    let navigate = useNavigate();

    return (
        <div className="brand-list-container">
            <button className="brand-list-button" onClick={() => navigate("/brands/" + id)}>{brandName}</button>
            {editButton}
            {deleteButton}
        </div>
    );
}
