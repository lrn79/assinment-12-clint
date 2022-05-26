import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {
    const handleAddReview = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;

        const review = { name, img, rating, description }
        // send data to the server
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Your Review added successfully!!!');
                e.target.reset();
            })

    }
    return (
        <div className='container mx-auto mb-32 mt-20'>
            <form onSubmit={handleAddReview}>
                <div class="form-control ">
                    <label class="label">
                        <span class="label-text">Your Name</span>
                    </label>
                    <label class="input-group">
                        <span>name</span>
                        <input type="text" name='name' placeholder="Your name" class="input input-bordered w-80" />
                    </label>
                </div>
                <div class="form-control ">
                    <label class="label">
                        <span class="label-text">Image URL</span>
                    </label>
                    <label class="input-group">
                        <span>Img</span>
                        <input type="text" name='img' placeholder="inter img url" class="input input-bordered w-80" />
                    </label>
                </div>
                <div class="form-control ">
                    <label class="label">
                        <span class="label-text">Comment</span>
                    </label>
                    <label class="input-group">
                        <span>Comment</span>
                        <textarea type="text" name='description' placeholder="Enter Your Comment" class="input input-bordered w-80 h-32 textarea textarea-secondary" />
                    </label>
                </div>
                <div class="form-control ">
                    <label class="label">
                        <span class="label-text">Your Ratings</span>
                    </label>
                    <label class="input-group">
                        <span>Ratings</span>
                        <input type="number" name='rating' min={1} max={5} maxLength={5} placeholder="Enter ratings" class="input input-bordered  w-80" />
                    </label>

                </div>
                <button type="submit" className="btn btn-warning w-25 d-block mt-5 mx-auto btn_style">Submit</button>

            </form>
        </div>
    );
};

export default AddReview;