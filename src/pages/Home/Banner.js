import React from 'react';
import './Banner.css'
import banner from '../../images/banner-1.jpg'
import { useNavigate } from 'react-router-dom';
import PrimaryBtn from '../../Component/PrimaryBtn';
const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen mt-5'>
            <div className="hero  bg-base-100">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={banner} className="max-w-md   mr-20 redious" />
                    <div className='mx-20'>
                        <h1 className="text-5xl  font-bold">A Watch Manufacturing company!</h1>
                        <p className="py-6  ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button onClick={() => navigate('/login')}><PrimaryBtn>log in</PrimaryBtn></button>

                    </div>
                </div>
            </div>
            <div className='curv mt-6'>
            </div>
        </div>
    );
};

export default Banner;