import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const GoogleSignUp = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const [token] = useToken(user)

    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-success text-white font-bold mx-16 "
            >Sign Up with Google</button>
        </div>
    );
};

export default GoogleSignUp;