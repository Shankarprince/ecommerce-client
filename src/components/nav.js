import { Link } from "react-router-dom";
import "../App.css";

export function Nav() {
    return(
        <div className="nav-container">
            <h2>Electro Cart</h2>
            <div>
                <Link to="/"><h4>Home</h4></Link>
                <h4>Account</h4>
                <h4>Orders</h4>
                <h4>More</h4>
                <h4><span>🛒</span>Cart</h4>
            </div>
        </div>
    );
}