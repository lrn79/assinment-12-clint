import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddProducts = () => {
    const [user] = useAuthState(auth)
    const handleAddProduct = e => {

        e.preventDefault();
        const img = e.target.img.value;
        const name = e.target.name.value;
        const available_quantity = e.target.available_quantity.value;
        const minimum_quantity = e.target.minimum_quantity.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const email = user?.email;


        const tools = { name, description, img, price, available_quantity, minimum_quantity, email };

        // send data to the server
        fetch('https://murmuring-crag-01369.herokuapp.com/addTools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tools)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Tools Added successfully!!!');
                e.target.reset();
            })
    }
    return (
        <div>
            <div>
                <h1 className='text-center text-4xl font-extrabold mb-10'><span className='text-5xl text-lime-500'>A</span>dd New Item</h1>
            </div>
            {/* Form */}
            <div className='mx-96'>
                <form onSubmit={handleAddProduct}>
                    <div>
                        <label class="label">
                            <span class="label-text font-bold">Image</span>
                        </label>
                        <input type="text" name='img' placeholder="Enter Img URL" class="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text font-bold">Your Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text font-bold">Price</span>
                        </label>
                        <input type="number" name='price' placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text font-bold">Available Quantity</span>
                        </label>
                        <input type="number" name='available_quantity' placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text font-bold">Minimum Quantity</span>
                        </label>
                        <input type="number" name='minimum_quantity' placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text font-bold">Description</span>
                        </label>
                        <textarea type="text" name='description' placeholder="Type here" class="textarea textarea-accent w-full max-w-xs" />
                    </div>
                    <button type="submit" className="btn btn-warning w-48 d-block mt-2 mb-10 mx-16 btn_style">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default AddProducts;