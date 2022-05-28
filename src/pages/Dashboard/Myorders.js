import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Component/Loading';
import auth from '../../firebase.init';

const Myorders = () => {
    const [user] = useAuthState(auth)
    const { data: order, isLoading, } = useQuery('order', () => fetch(`https://murmuring-crag-01369.herokuapp.com/ordered/${user?.email}`).then(res => res.json())

    )
    console.log(order)
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
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.quantity}</td>
                                    <td>
                                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                        {(order.price && order.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                        </div>}
                                    </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Myorders;