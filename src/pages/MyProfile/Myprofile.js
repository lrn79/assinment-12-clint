import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myprofile = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    const { email } = user;

    return (
        <div>
            <div>
                <h1 className='text-center text-4xl font-extrabold mb-10'><span className='text-5xl text-lime-500'>M</span>Y Profile</h1>
            </div>
            {/* profile header */}


        </div >
    );
};

export default Myprofile;