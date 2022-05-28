import React from 'react';

const PortFolio = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-4xl font-extrabold mb-10'><span className='text-5xl text-lime-500'>M</span>Y Portfolio</h1>
            </div>
            {/* portfolio header */}
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='w-96' src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" />
                    <div>
                        <h1 class="text-5xl font-bold">Hi! This Is Lutfor Rahman Nayeem!</h1>
                        <p class="py-6">I amn A wev developer over  years experience.... I did My course from Programming Hero <br /> Best course Provider of Bangladesh .. And the Most Successfully Did There job.. <br />I always Wanna Do My Work With My passion </p>
                        <button class="btn btn-primary">Download CV</button>
                    </div>
                </div>
            </div>

            {/* My information */}
            <div>

                <div class="hero min-h-72 p-10 bg-gray-200">
                    <div class="hero-content text-center">
                        <div class="max-w-md mb-3">
                            <h1 class="text-5xl font-bold mb-5">My details</h1>
                            <h1 class="text-2xl font-bold">My Best 3 website Link </h1>
                            <p class="py-2">My website 1 : <span>https://warehouse-b2864.firebaseapp.com/</span></p>
                            <p class="py-2">My website 2 : <span>https://lrn79-photography.web.app/</span></p>
                            <p class="py-2">My website 3 : <span>manufacturer-720ca.firebaseapp.com</span></p>
                            <p class="py-2">Email:nayeem12667@gmail.com</p>
                            <p class="py-2">Educational background: Hons 1st Year at IUBAT </p>
                        </div>
                    </div>
                    {/* Technology I know */}
                </div>
            </div>
            <div>
                <h1 className='text-center text-4xl font-extrabold mb-10 mt-5'><span className='text-5xl text-lime-500'>T</span>echnology I know</h1>
            </div>
            <div class="hero min-h-48 bg-base-200 mb-5">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='rounded-full ' src="https://www.designyourway.net/blog/wp-content/uploads/2018/12/Information-technology-big-data-collection-complex.jpg" />
                    <div>
                        <h1 class="text-5xl font-bold">Technology I know!</h1>
                        <h1 class="text-2xl mt-5 font-bold">*HTML!</h1>
                        <h1 class="text-2xl  font-bold">*CSS!</h1>
                        <h1 class="text-2xl  font-bold">*Javascript!</h1>
                        <h1 class="text-2xl font-bold">*React!</h1>
                        <h1 class="text-2xl font-bold">*Node!</h1>
                        <h1 class="text-2xl font-bold">*Express js!</h1>
                        <h1 class="text-2xl font-bold">*MongoDB!</h1>
                        <button class="btn btn-primary mt-5">Download CV</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PortFolio;