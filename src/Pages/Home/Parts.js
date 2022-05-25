import React from 'react';
import PartsCard from './PartsCard';
import daly from '../../images/daly.jpg';
import hweel from '../../images/hweel.jpg';
import lring from '../../images/lring.jpg';

const Parts = () => {
    const parts = [
        {
            _id: 1,
            name: 'Daly',
            description: 'Stoger nut opener',
            orderQuantity: 100,
            quantity: 1000,
            price: 300,
            img: daly,
        },
        {
            _id: 2,
            name: 'Hweel',
            description: '',
            orderQuantity: 100,
            quantity: 1000,
            price: 270,
            img: hweel,
        },
        {
            _id: 3,
            name: 'Lring',
            description: '',
            orderQuantity: 100,
            quantity: 1000,
            price: 350,
            img: lring,
        }
    ]

    return (

        <div className=''>
            <div className='text-center'>
                <h3 className='ml-10 my-12 text-primary font-bold text-xl uppercase'>Our Products</h3>

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                {
                    parts.map(partsCard => <PartsCard
                        key={parts._id}
                        partsCard={partsCard}
                    ></PartsCard>)
                }
            </div>
        </div>

    );
};

export default Parts;