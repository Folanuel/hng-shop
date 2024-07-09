import React from 'react';

const CartItem = ({ item }) => {
    return (
        <div className="flex p-4 border-b">
        <div className="flex items-center">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
            <div className="ml-4">
            <h4 className="text-lg font-semibold">{item.name}</h4>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
            <p className="text-lg">${item.price}</p>
            </div>
        </div>
        <div>            
            <button className="text-red-500 hover:text-red-700 pl-10">Delete</button>
        </div>
        </div>
    );
};

export default CartItem;
