import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://murmuring-crag-01369.herokuapp.com/allReview")
            .then(res => res.json())
            .then((data) => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <div>
            <div>
                <h1 className='text-center text-4xl font-extrabold mb-10 mt-10'><span className='text-5xl text-lime-500'>R</span>eviews</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-20 mb-10'>
                {
                    reviews.map(review => <Review review={review}></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;