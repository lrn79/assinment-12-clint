import React from 'react';
import { toast } from 'react-toastify';



const UserRow = ({ user, refetch }) => {
    console.log(user)

    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://murmuring-crag-01369.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then((data) => {
                refetch()
                toast.success('admin made')
            })

    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button class="btn btn-xs" onClick={makeAdmin}>make admin</button>}</td>
            <td><button class="btn btn-xs">Remove</button></td>
            {/* 75.7 number videw theke suro kotte hbe */}
        </tr>

    );
};

export default UserRow;

// ADMIn
// email:nayeem4@gmail.com
// pass : 121212