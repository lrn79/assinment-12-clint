import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Component/Loading';
import CheakOutFrom from './CheakOutFrom';
const stripePromise = loadStripe('pk_test_51L1V0ABnDo3eZslJWh9iGP7P1597viXF2yxnTIYcLyHLdPVgOOLWFMoXR2aUPixHdd7gCB4J7M7hJoObyKJat1FB00JsW5bCRB');

const Payment = () => {
    const { id } = useParams();
    const url = `https://murmuring-crag-01369.herokuapp.com/allOrdered/${id}`

    const { data: orders, isLoading } = useQuery(['ordered', id], () => fetch(url, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div>
                <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                    <div class="card-body">
                        <p className="text-success font-bold">Hello, </p>
                        <h2 class="card-title">Please Pay for {orders.name}</h2>
                        <p>Please pay: ${orders.price}</p>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheakOutFrom orders={orders} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};
// 77.7 number video
export default Payment;

// pk_test_51L1V0ABnDo3eZslJWh9iGP7P1597viXF2yxnTIYcLyHLdPVgOOLWFMoXR2aUPixHdd7gCB4J7M7hJoObyKJat1FB00JsW5bCRB