import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    const menuItems = <>
        <li className='text-xl font-bold bg-white-500 rounded-full hover:bg-lime-200 '><Link to="/blogs">Blogs</Link></li>
        <li className='text-xl font-bold bg-white-500 rounded-full hover:bg-lime-200 '><Link to="/portfolio">Portfolio</Link></li>
        {
            user && <li className='text-xl bg-white-500 rounded-full  font-bold hover:bg-lime-200 '><Link to="/dashboard">Dashboard</Link></li>
        }

        <li className='text-xl bg-white-500 rounded-full  font-bold hover:bg-lime-200 '>{user ? <button className="btn btn-success" onClick={logout} >Sign Out</button> : <Link to="/login">Log in</Link>}</li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <p className="btn btn-ghost normal-case text-xl mx-5 text-3xl font-bold"><Link to={"/"}>
                    <span className='text-4xl text-lime-500'>W</span>atchmaker
                </Link ></p>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0 mx ">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;

