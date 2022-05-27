import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ManageProductRow = ({ tool, tools, setTools, isReload, setIsReload }) => {
    console.log(tools)
    const { _id, name, price, img, minimum_quantity, Available_quantity } = tool;
    const navigate = useNavigate();
    // For delete A card
    const handleDelete = async (id) => {
        // console.log(id)
        const confirmPass = window.confirm('Are you sure you want to delete it?');

        if (confirmPass) {
            const url = `http://localhost:5000/deleteTools/${id}`;
            await axios.delete(url)

            const remaining = tools.filter(tool => tool._id !== id)
            setTools(remaining)
            setIsReload(!isReload)

        }

    };
    return (
        <tr>
            <th><div className="w-16 mask mask-squircle">
                <img src={img} />
            </div></th>
            <td>{name}</td>
            <td>{price}$</td>
            <td>{minimum_quantity}</td>
            <td>{Available_quantity}</td>
            <td><button class="btn btn-xs" onClick={() => navigate('addProducts')}>Add New</button></td>
            <td><button onClick={() => handleDelete(_id)} class="btn btn-xs bg-red-600 text-white">Remove</button></td>
        </tr>

    );
};

export default ManageProductRow;