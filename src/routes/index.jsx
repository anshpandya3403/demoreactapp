import React from "react";
import { BrowserRouter,Routes,Route  } from "react-router-dom";
import Home from '../views/Home'
import Contact from "../views/Contact";
import Product from "../views/Product";
import ProductPage from '../views/Productpage';
import Cart from "../views/Cart";
import NavBar from "../components/Navbar";
import  Pagination  from '../components/Pagination';

const MainRouter = () =>{

    return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route exact path='/product' element={<Product/>}/>
          <Route path="/product/:id" element={<ProductPage/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<><NavBar/><h1>404</h1></>} />
          
        </Routes>
      </BrowserRouter>
      );

}
export default MainRouter;