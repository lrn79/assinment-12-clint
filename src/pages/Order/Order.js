import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useOrder from '../../hooks/useOrder';

const Order = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [tool] = useOrder(id);
    console.log(tool)
    const { name, _id, img, description, minimum_quantity, Available_quantity, price } = tool

    const onSubmit = (data) => {
        const quantity = parseInt(data.quantity);
        if (minimum_quantity > quantity || quantity > Available_quantity) {
            toast.error('You Have to Fullfil minimum and available quantity')
            return
        }
        else {
            const order = {
                name: name,
                quantity: quantity,
                img: img,
                price: price,
                userName: user?.displayName,
                email: user?.email,
                phone: data.phone,
                address: data.address
            };
            fetch(`http://localhost:5000/allOrdered`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    toast('Your Order added successfully!!!');
                    data.target.reset();
                })
        }
    };

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
            <div>
                <h1 className='text-center text-4xl font-extrabold mb-10'><span className='text-5xl text-lime-500'>O</span>rder Now</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 justify-items-center'>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>
                        <input
                            type="email"
                            value={user?.email}
                            disabled
                            className='input input-bordered w-full max-w-xs'
                        />
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'>
                            <span className='label-text'>Name</span>
                        </label>
                        <input
                            type="text"
                            value={user?.displayName}
                            disabled
                            className='input input-bordered w-full max-w-xs'
                        />
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'>
                            <span className='label-text'>Quantity</span>
                        </label>
                        <input
                            type="number"
                            defaultValue={minimum_quantity}
                            className='input input-bordered w-full max-w-xs'
                            placeholder='Enter Quantity'
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: "Quentity needed"
                                },
                            })}
                        />
                    </div>
                    <label className='label text-left'>
                        {
                            errors.quantity?.type === 'required' && (
                                <span className='label-text-alt text-error'>
                                    {errors.quantity.message}
                                </span>
                            )
                        }
                    </label>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'>
                            <span className='label-text'>Address</span>
                        </label>
                        <input
                            type="text"
                            className='input input-bordered w-full max-w-xs'
                            placeholder='Enter Your address'
                            {...register("address")}
                        />
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'>
                            <span className='label-text'>Phone Number</span>
                        </label>
                        <input
                            type="text"
                            className='input input-bordered w-full max-w-xs'
                            placeholder='Enter Phone Number'
                            {...register("phone")}
                        />
                    </div>
                    <input className='btn btn-success mt-3 mb-5 px-20 font-bold text-white' type="submit" />
                </form>
            </div>
        </>
    );
};

export default Order;