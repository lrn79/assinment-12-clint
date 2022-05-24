import React from 'react';
import './primaryBtn.css'

const PrimaryBtn = ({ children }) => {
    return (
        <div>
            <button className=" btn btns-success text-white font-extrabold px-20">{children}</button>
        </div>
    );
};

export default PrimaryBtn;