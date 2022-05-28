import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Sammarys from './BuisnessSummary/Sammarys';
import ContactUs from './ContactUs';
import Reviews from './Review/Reviews';
import Tools from './WatchTools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Sammarys></Sammarys>
            <AboutUs></AboutUs>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};
export default Home;