import React from 'react';
import useTools from '../../../hooks/useTools';
import ManageProductRow from './ManageProductRow';

const ManageProduct = () => {
    const { tools, setTools, isReload, setIsReload } = useTools('http://localhost:5000/allTools');

    return (
        <div>
            <div>
                <h1 className='text-center text-4xl font-extrabold mb-10'><span className='text-5xl text-lime-500'>M</span>anage Products</h1>
            </div>
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
                            tools.map(tool => <ManageProductRow
                                key={tool._id}
                                tool={tool}
                                setTools={setTools}
                                isReload={isReload}
                                setIsReload={setIsReload}
                                tools={tools}
                            ></ManageProductRow>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageProduct;