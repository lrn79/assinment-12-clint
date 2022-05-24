import React from 'react';

const Sammarys = () => {
    return (
        <div>
            <div className='mt-5 '>
                <h1 className='text-center text-4xl font-extrabold'><span className='text-5xl text-lime-500 ' >B</span>usiness summary</h1>
            </div>
            <div className=' stats stats-vertical lg:stats-horizontal shadow lg:w-full '>
                {/* grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 */}
                <div className="stats shadow m-10 h-72 bg-gray-200">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-16 h-36 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="text-3xl font-bold text-black">Total Clients</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc text-xl font-bold">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block  w-16 h-36 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div className="  text-3xl font-bold text-black">Average Ordered</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc text-2xl font-bold text-green-700">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-16 h-36 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="  text-3xl font-bold text-black">Total Products</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc font-bold text-xl">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Sammarys;