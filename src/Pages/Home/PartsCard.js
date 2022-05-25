import React from 'react';

const PartsCard = ({ partsCard }) => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl mt-12">
            <figure><img src={partsCard.img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{partsCard.name}</h2>
                <p>Description:{partsCard.description}</p>
                <div>
                    <p className='my-5'>minimum order quantity:{partsCard.orderQuantity}</p>
                    <p>available quantity:{partsCard.quantity}</p>
                </div>
                <p>Price:{partsCard.price}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary"> place order</button>
                </div>
            </div>
        </div>
    );
};

export default PartsCard;