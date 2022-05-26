import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h1 className='text-2xl font-bold text-green-500'>Welcome to Dashboard</h1>
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='text-2xl font-bold'><Link to='/dashboard'>dashboard</Link></li>
                        <li className='text-2xl font-bold' ><Link to='addReview'>Add Review</Link></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;