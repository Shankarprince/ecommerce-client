import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home.js";
import { AddBrand } from './components/addbrand';
import { EditBrand } from './components/editBrand';
import { BrandProducts } from './components/brandProducts';
import { AddProduct } from './components/addProduct';
import { EditProduct } from './components/editProduct';


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
