import React,{useContext} from "react";
import { NavLink} from "react-router-dom";
import './navbar.css';
import {CartContext} from '../Cart';


const NavBar = () =>{
    const {items} = useContext(CartContext);
    const totalItems = items.reduce((total, item) => parseInt(total) + parseInt(item.quantity), 0);
    return (
<header>
    <nav>
 <div className="navbar">  
    <ul>

        <li>
            <NavLink to="/">Home</NavLink>
        </li>

        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
       
        <li>
            <NavLink to="/products">Products</NavLink>
        </li>
        <li id="cart">
            <NavLink to="/cart">Cart{totalItems?(`(${totalItems})`):null}</NavLink>
        </li>
    </ul>
</div>
</nav>
</header>
    );


}

export default NavBar;
