import React from 'react';


const StarRating = ({rating})=>{
  
    const rounded = Math.round(rating);    
    const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rounded){
      stars.push(<span key={i} style={{ color: '#ffcc00',fontSize:'20px', }}>&#9733;</span>);
    } 
    else {
      stars.push(<span key={i} style={{ color: '#ccc',fontSize:'20px', }}>&#9733;</span>);
    }
  }
  return (<div>{stars}</div>);
};

export default StarRating;