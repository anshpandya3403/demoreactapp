import React, { useState,useContext } from 'react';
import CartItem from '../../components/CartItem'
import {CartContext} from '../../components/Cart';
import NavBar from '../../components/Navbar';
import './cart.css';
const Cart = () => {
  const { items,removeFromCart, clearCart,addCartQuantity,calculateTotal} = useContext(CartContext);
  console.log(items);
  return (
    <div>
    <NavBar/>
    <div><h1>Cart</h1></div>
    <div className="grid-container cart">
      {items.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart}  changeQuantity={addCartQuantity}/>
      ))}
    </div>
    <div>
      <h1></h1>
    </div>
    {items.length&&(<div><h3>Your total is: {calculateTotal()}</h3></div>)}
    <div className='clear'>
    {!items.length && <h1>No items in cart</h1>}
    {items.length&&(<button onClick={()=>clearCart()}>Clear</button>)}
      </div>
      
       
    </div>
  );
};

export default Cart;