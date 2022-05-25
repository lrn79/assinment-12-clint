import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Component/Loading';
import auth from '../../firebase.init';
import GoogleSignUp from './GoogleSignUp';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // from hooks
    const [signInWithEmailAndPassword, user, loading,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    // handle email and pass
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPassword(e.target.value)

    }
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
            toast('Logged In');

        }
    }, [from, navigate, user])
    if (loading) {
        return <Loading></Loading>
    }
    // For Log in User 

    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    const handleResetPassword = async (e) => {
        await sendPasswordResetEmail(email);
        toast('Email sent');

    }
    return (
        <div className='mb-20'>
            <div class="hero min-h-screen bg-base-200 mb-20">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-32">
                        <div class="card-body mb-20 w-">
                            <form onSubmit={handleLogin}>
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
                                    <input onChange={handlePass} type="password" placeholder="password" class="input input-bordered" />

                                </div>
                                <div class="form-control mt-6">
                                    <button type='submit' class="btn btn-success text-white font-bold">Log In</button>
                                </div>
                            </form>
                            <p className='mt-2 mx-5'>New here ?? <Link to='/signUp' className='text-xl text-green-500 font-semibold' >Register please! </Link></p>
                            <h1 className=' mx-5 '>Forgot password? ?
                                <button className='btn btn-link text-primary text-xl font-bold ' onClick={handleResetPassword} >
                                    Reset
                                </button></h1>
                            <GoogleSignUp></GoogleSignUp>
                        </div>

                    </div>
                    <div class="text-center lg:text-left">
                        <h1 class="text-7xl font-bold">Login now!</h1>
                        <p class="py-6">You Have to Sign Up Or log In For Experience All future ... You Will See A dashboard. Then You Can Order By SighUP Or log In... And You Can Access All The Feature of this website </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;