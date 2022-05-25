import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Factory from './Factory';
import Parts from './Parts';
import Reviews from './Reviews';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Factory></Factory>

        </div>
    );
};

export default Home;