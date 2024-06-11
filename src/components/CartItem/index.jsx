import React from 'react';
import './cartitem.css';

const CartItem = ({ item,removeFromCart,changeQuantity}) => {
  console.log(item)
  return (
    
    <div className="cart-item">
      <div className="cart-sub-container">
      <div>
      <img src={item.thumbnail} alt={item.title} />
      </div>
      <div className="item-details">
        <h3>{item.title}</h3>
        
        <p><input type="number" defaultValue={item.quantity} onChange={(e)=>changeQuantity(item,e.target.value)} key={item.quantity} autoFocus min={1}/></p>
        <p>Price: ${item.price}</p>
        <p>Subtotal:{(item.quantity*item.price).toFixed(2)}</p>
        </div>
        </div>
        <button className="remove-item" onClick={()=>removeFromCart(item)}>Remove Item</button>
      
    </div>
  );
};

export default CartItem;