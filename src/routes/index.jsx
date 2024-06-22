import React from "react";
import { BrowserRouter,Routes,Route  } from "react-router-dom";
import Home from '../views/Home'
import Contact from "../views/Contact";
import Product from "../views/Product";
import ProductPage from '../views/Productpage';
import Cart from "../views/Cart";
import NavBar from "../components/Navbar";
import AddProduct from "../admin/views/AddProduct";
import AdminHome from "../admin/views/AdminHome";
import AdminProduct from "../admin/views/AdminProduct";
import EditProduct from "../admin/views/EditProduct";



const MainRouter = () =>{

    return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route exact path='/products' element={<Product/>}/>
          <Route path="/products/:_id" element={<ProductPage/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<><NavBar/><h1>404</h1></>} />
          <Route path="/admin/product/addProduct" element={<AddProduct/>} />
          <Route exact path="/admin" element={<AdminHome/>} />
          <Route path="/admin/product" element={<AdminProduct/>} />
          <Route path = "/admin/*" element={<AdminHome/>} />
          <Route path="/admin/product/edit/:id" element={<EditProduct/>} />
         

          
        </Routes>
      </BrowserRouter>
      );

}
export default MainRouter;