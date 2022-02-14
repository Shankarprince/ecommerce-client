import { useNavigate } from "react-router-dom";

export function BrandProductList({ data }) {
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
