import { Brands } from './brands.js';
import { Products } from "./products.js";
import { Nav } from './nav.js';

export function Home() {

    return (
        <>
            <div><Nav /></div>
            <div className="home-container">
                <Brands />
                <Products />
            </div>
        </>
    );
}