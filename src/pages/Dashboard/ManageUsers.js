import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Component/Loading';
import UserRow from './UserRow';

const ManageUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://murmuring-crag-01369.herokuapp.com/user').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(users)
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>make admin</th>
                            <th>Remove user</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow key={user._id} refetch={refetch} user={user}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;