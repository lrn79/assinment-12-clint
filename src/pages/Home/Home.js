import React from 'react';
import Banner from './Banner';
import Sammarys from './BuisnessSummary/Sammarys';
import Tools from './WatchTools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Sammarys></Sammarys>
        </div>
    );
};
export default Home;