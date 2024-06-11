import React from 'react';
import StarRating from '../StarRating';
import './review.css';
const Review = (props) => {
    const date = new Date(props.date);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return (
        <div className='review-container'>
            <h1 className='review-name'>{props.name}({props.email})</h1>
            <StarRating rating = {props.rating} />
            <h1 className='review-date'>{formattedDate}</h1>
            
            <p className=''>{props.content}</p>
        </div>
    );
};

export default Review;