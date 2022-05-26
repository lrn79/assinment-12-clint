import React from 'react';

const Review = ({ review }) => {
    const { description, name, img, rating } = review;
    return (
        <div>
            <div className="card w-96 bg-base-100 drop-shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl object-cover w-36 h-36 rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">NAME: {name}</h2>
                    <h2 className="card-title">rating: {rating}</h2>
                    <p>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default Review;