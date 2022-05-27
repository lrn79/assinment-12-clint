import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../Component/Loading';
import auth from '../../firebase.init';

const Myorders = () => {
    const [user] = useAuthState(auth)
    const { data: orders, isLoading, } = useQuery('order', () => fetch(`http://localhost:5000/allOrdered/${user?.email}`).then(res => res.json())

    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.quantity}</td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Myorders;