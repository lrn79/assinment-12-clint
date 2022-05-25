import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Component/Loading';
import auth from '../../firebase.init';
import GoogleSignUp from './GoogleSignUp';

const SignUP = () => {
    const [userName, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const handleUserName = e => {
        setUsername(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPass = e => {
        setConfirmPassword(e.target.value)
    }
    if (user) {
        navigate('/')
        console.log(user)
    }
    if (loading) {
        return <Loading></Loading>
    }
    const UserSignUp = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('‼password did mot matched')
            return
        }

        createUserWithEmailAndPassword(email, password)
        console.log(user)
    }
    return (
        <div className='mb-20'>
            <div class="hero min-h-screen bg-base-200 mb-20">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-32">
                        <div class="card-body mb-20 w-">
                            <form onSubmit={UserSignUp}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input onChange={handleUserName} type="text" placeholder="Enter Your Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input onChange={handleEmail} type="text" placeholder="email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input onChange={handlePass} type="password" placeholder="password" class="input input-bordered " />

                                    <label class="label">
                                        <span class="label-text">Confirm Password</span>
                                    </label>
                                    <input onChange={handleConfirmPass} type="password" placeholder="Confirm Password" class="input input-bordered" />
                                    <p className='text-red-500 font-bold mx-3'>{error}</p>

                                </div>
                                <div class="form-control mt-6">
                                    <button type="submit" class="btn btn-success text-white font-bold">Sign Up</button>
                                </div>
                            </form>
                            <p className='mt-2 mx-5'>Already Sign Up !! <Link to='/login' className='text-xl text-green-500 font-semibold' >Login please! </Link></p>
                            <GoogleSignUp></GoogleSignUp>
                        </div>
                    </div>
                    <div class="text-center lg:text-left">
                        <h1 class="text-7xl font-bold">Sign Up now!</h1>
                        <p class="py-6">You Have to Sign Up Or log In For Experience All future ... You Will See A dashboard. Then You Can Order By SighUP Or log In... And You Can Access All The Feature of this website </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUP;