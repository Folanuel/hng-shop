import React from 'react';
import rate from '../images/Ratingratingstar.png';

const Card = ({ picture, title, description, rating, price }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-2">
            <img className="w-full h-48 object-cover" src={picture} alt={title} />
            <div className="p-2">
                <div className="font-bold text-lg mb-2">{title}</div>
                <p className="text-gray-700 text-sm">{description}</p>
                <div className="mt-2">
                    <img src={rate} alt={rating} className="w-16" />
                    <span className="text-gray-900 text-lg font-bold">${price}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
