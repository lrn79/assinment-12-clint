import React from 'react';

const ManageProductRow = ({ tool, tools, setTools, isReload, setIsReload }) => {
    console.log(tools)
    const { name, price, img, minimum_quantity, Available_quantity } = tool;
    return (
        <div>
            <tr>
                <th><div className="w-16 mask mask-squircle">
                    <img src={img} />
                </div></th>
                <td>{name}</td>
                <td></td>
                <td><button class="btn btn-xs">Remove</button></td>
            </tr>
        </div >
    );
};

export default ManageProductRow;