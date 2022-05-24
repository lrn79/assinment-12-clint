import React from 'react';
import PrimaryBtn from '../../../Component/PrimaryBtn';

const Tool = ({ tool }) => {
    const { name, price, minimum_quantity, Available_quantity, description, img } = tool;
    return (
        <div>
            <div className="card w-50 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-44" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name :{name}</h2>
                    <h2 className="card-title">Price :{price}</h2>
                    <h2 className="card-title">Minimum quantity :{minimum_quantity}</h2>
                    <h2 className="card-title">Available quantity :{Available_quantity}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <PrimaryBtn>Order Now</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;