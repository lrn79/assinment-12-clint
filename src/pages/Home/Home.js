import React from 'react';
import Banner from './Banner';
import Sammarys from './BuisnessSummary/Sammarys';
import Reviews from './Review/Reviews';
import Tools from './WatchTools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Sammarys></Sammarys>
            <Reviews></Reviews>
        </div>
    );
};
export default Home;