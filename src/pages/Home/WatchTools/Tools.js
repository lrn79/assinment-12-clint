import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch(' http://localhost:5000/allTools')
            .then(res => res.json())
            .then((data) => setTools(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-center text-4xl font-extrabold mb-10'><span className='text-5xl text-lime-500'>T</span>ools We Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools.map(tool => <Tool tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;