import React,{ createContext,useState,useEffect } from "react";

export const CartContext = createContext();

export const CartLogic = ({children}) =>{
    const [items,setItems] = useState([]);
    

    const addToCart = (item) =>{
        if(!item){
          return;
        }
        const inCart =  items.find((Cartitem)=>Cartitem.id===item.id);
        if(inCart){
            setItems(items.map((Cartitem)=>Cartitem.id===item.id?{ ...Cartitem, quantity: parseInt(Cartitem.quantity) + 1 }:Cartitem));
        }
        else{
            setItems([...items, { ...item, quantity: 1 }]);
        }
        window.alert(`${item.title} added to cart`);
    };

    const addCartQuantity = (item,newQuantity) =>{
      const inCart =  items.find((Cartitem)=>Cartitem.id===item.id);
      if(inCart){
         if(newQuantity>=0){
          setItems(items.map((Cartitem)=>Cartitem.id===item.id?{ ...Cartitem, quantity: newQuantity }:Cartitem));
         }
         else{
          window.alert("Enter valid quantity");
         }
      }

    };

    const removeFromCart = (item) => {
        console.log("removing item");
        console.log(item);
        const InCart = items.find((cartItem) => cartItem.id === item.id);
        if(InCart){setItems(items.filter((cartItem) => cartItem.id !== item.id));}
      };

    const clearCart = () => {setItems([]);};

    const calculateTotal = () => {
      return (items.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2);
    }

    useEffect(() => {

        localStorage.setItem("cartItems", JSON.stringify(items));
        console.log(localStorage);
      }, [items]);

      useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
          setItems(JSON.parse(cartItems));
          console.log(localStorage);
        }
    },[]);
    return(
        <CartContext.Provider value={{items,addToCart,removeFromCart,clearCart,addCartQuantity,calculateTotal}}>
            {children}
        </CartContext.Provider>
    );

};

