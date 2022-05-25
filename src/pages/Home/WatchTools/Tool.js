import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryBtn from '../../../Component/PrimaryBtn';

const Tool = ({ tool }) => {
    const navigate = useNavigate()
    const { _id, name, price, minimum_quantity, Available_quantity, description, img } = tool;
    const navigateorderNow = id => {
        navigate(`orderNow/${id}`)
    }

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
                        <button onClick={() => navigateorderNow(_id)}  ><PrimaryBtn>Order Now</PrimaryBtn></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;