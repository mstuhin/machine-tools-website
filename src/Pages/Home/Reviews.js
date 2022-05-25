import React from 'react';
import mane1 from '../../images/mane1.jpg';
import mane2 from '../../images/mane2.jpg';
import mane3 from '../../images/mane3.jpg';
import Review from './Review';

const Reviews = () => {

    const reviews = [
        {
            _id: 1,
            name: 'juli',
            description: '',
            img: mane1,
        },
        {
            _id: 2,
            name: 'juli',
            description: '',
            img: mane2,
        },
        {
            _id: 3,
            name: 'juli',
            description: '',
            img: mane3,
        }
    ]
    return (

        <div className='my-28'>
            <div className='text-center'>
                <h3 className='ml-10 my-5 text-primary font-bold text-xl uppercase'>Reviews</h3>

            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>



    );
};

export default Reviews;