import React from 'react';
import StarRating from '../../../components/StarRating';
import {Link} from 'react-router-dom';


const Card = ({product}) => {
  
  
  

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
   height:'190px',
   width:'250px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
 
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#CDE8E5',
   
  };


  const imageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '5px',
  };


  const textStyle = {
    flex: '1',
    marginLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    
   
   
  };


  const titleStyle = {
   
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color:'black',
  };


  const priceStyle = {
    
    
    fontWeight: 'normal',
    color: '#666',
    marginBottom: '5px',
   
  };

  const buttonStyle = {
    textAlign: 'center',
    padding: '5px',
    width:'120px',
    display: 'block',
    margin:'auto auto',
   
  };

  const cardSubStyle = {
    display:'flex',
    flexDirection:'row',
    height:'150px',
   
  };
  
  
  return (
    
    <div style={cardStyle} className='card'>
      
      <div style={cardSubStyle}>

      <img src={product.thumbnail} alt={product.title} style={imageStyle} />
      
      <div style={textStyle}>
        <div style={titleStyle}><span>{product.title}</span></div>
        <div style={priceStyle}><span>${product.price}</span></div>
        <StarRating rating={product.rating} />
        
        </div>
        </div>
       
        <div style={{width:'100%'}}>
        <Link to={`/admin/product/edit/${product._id}`} key={product.id} style={{ textDecoration: 'none' }}>    
        <button style={buttonStyle}>Edit Item</button>
        </Link>
        </div>
      </div>
  );
};
export default Card;