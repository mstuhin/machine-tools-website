import React from 'react';
import PartsCard from './PartsCard';
import daly from '../../images/daly.jpg';
import hweel from '../../images/hweel.jpg';
import lring from '../../images/lring.jpg';

const Parts = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <PartsCard partsTitle="difrent type" img={daly}></PartsCard>
            <PartsCard partsTitle="difrent type" img={hweel}></PartsCard>
            <PartsCard partsTitle="difrent type" img={lring}></PartsCard>
        </div>
    );
};

export default Parts;