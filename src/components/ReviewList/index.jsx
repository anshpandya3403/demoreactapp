import React from "react";
import Review from '../Review';

const ReviewList = ({reviews}) => {
    return (
        <div className="reviewcontainer">
            {reviews.map(review => (
                <Review  
                name={review.reviewerName} 
                email={review.reviewerEmail}
                date = {review.date}
                rating = {review.rating}
                content = {review.comment}
                />
            ))}
        </div>
    );
};

export default ReviewList;