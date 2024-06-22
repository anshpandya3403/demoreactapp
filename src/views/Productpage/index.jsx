import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/Navbar";
import StarRating from "../../components/StarRating";
import './productpage.css'
import ReviewList from "../../components/ReviewList";
import {CartContext} from "../../components/Cart";


const ProductPage = () => {
  const [product, setProduct] = useState("");
  const [review,setReview] = useState(false);
  const { _id } = useParams();
  const {items,addToCart} = useContext(CartContext);
 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${_id}`);
        console.log(response.data);
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [_id]);


  return (
    <div className="main">
      <NavBar/>
  
    <div className="product-page">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-details">
      {product.brand?(<h2>{product.brand}</h2>):<></>}
        <h1>{product.title}</h1>

        <p>${product.price}</p>

        <h3>{product.category}</h3>
        <StarRating rating={product.rating} className="star"/>
        <p>{product.description}</p>
        <div className="buttoncontainer">
        {!review?(<button onClick={()=>setReview(true)}>View reviews</button>):null}
        <button onClick={()=>addToCart(product)}>Add to cart</button>
        </div>
        </div>
     </div>
     <div className="reviewpage">
        {review?(<div><ReviewList reviews={product.reviews}/><button onClick={()=>setReview(false)} className="button2">Hide reviews</button></div>):<></>}
      </div>
     </div>
  );
};

export default ProductPage;