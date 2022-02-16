// App
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/misc/home.js";
import { AddBrand } from './components/brands/addbrand';
import { EditBrand } from './components/brands/editBrand';
import { BrandProducts } from './components/brands/brandProducts';
import { AddProduct } from './components/products/addProduct';
import { EditProduct } from './components/products/editProduct';


export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/brands/add" element={<AddBrand />}></Route>
        <Route path="/brands/edit/:id" element={<EditBrand />}></Route>
        <Route path="/brands/:id" element={<BrandProducts />}></Route>
        <Route path="/products/add" element={<AddProduct />}></Route>
        <Route path="/products/edit/:id" element={<EditProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
