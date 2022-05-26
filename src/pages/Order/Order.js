import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useOrder from '../../hooks/useOrder';

const Order = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth)
    const [tool] = useOrder(id);
    console.log(tool)
    const { name, _id, img, description, minimum_quantity, Available_quantity } = tool
    return (
        <>
            <div>
                <h1 className='text-center text-4xl font-extrabold mb-10'><span className='text-5xl text-lime-500'>O</span>rder This Tool</h1>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className=" object-cover w-full h-full rounded-lg shadow-2xl mx-10 " />
                    <div className='mb-42 mr-20'>
                        <h1 className="text-5xl font-bold -20">All About This Products!</h1>
                        <div class="divider"></div>
                        <p className="py-2 text-xl font-bold"><span className='text-4xl'>id:</span> {_id}</p>
                        <p className="py-2 text-xl font-bold"><span className='text-4xl'>description:</span> {description}</p>
                        <p className="py-2 text-xl font-bold"><span className='text-4xl'>name:</span> {name}</p>
                        <p className="py-2 text-xl font-bold"><span className='text-4xl'>minimum_quantity:</span> {minimum_quantity}</p>
                        <p className="py-2 text-xl font-bold"><span className='text-4xl'>Available_quantity:</span> {Available_quantity}</p>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Order;