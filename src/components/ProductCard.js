import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
        <h4 className="text-lg font-semibold">{product.name}</h4>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-lg font-bold mt-2">${product.price}</p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4">Add to Cart</button>
        </div>
    );
};

export default ProductCard;
