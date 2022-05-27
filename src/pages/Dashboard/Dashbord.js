import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashbord = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h1 className='text-2xl font-bold text-green-500 mb-5'>Welcome to Dashboard</h1>
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {!admin && <>
                            <li className='text-2xl font-bold'><Link to='/dashboard'>My orders</Link></li>
                            <li className='text-2xl font-bold' ><Link to='addReview'>Add Review</Link></li>
                        </>}
                        <li className='text-2xl font-bold'><Link to="myProfile">My profile</Link></li>

                        {/* <li className='text-2xl font-bold' ><Link to='users'>manage User</Link></li> */}
                        {/* ADMIN */}
                        {admin && <>
                            <li className='text-2xl font-bold' ><Link to='users'>manage User</Link></li>
                            <li className='text-2xl font-bold' ><Link to='manageProducts'>manage Products</Link></li>
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;