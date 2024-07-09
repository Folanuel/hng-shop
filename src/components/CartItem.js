import React from 'react'
import bin from '../images/icondeleteicon.png'

const CartItem = ({ item }) => {
    return (
        <div className="flex flex-col md:flex-row p-4 border-b space-y-4 md:space-y-0 md:space-x-7">
            <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                <div className="ml-4">
                    <h4 className="text-m font-semibold">{item.name}</h4>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-m font-semibold">${item.price}</p>
                </div>
            </div>
            <div className="flex justify-end md:justify-start items-center">
                <button className="text-[#005858] px-3 py-2 flex justify-center items-center rounded-3xl space-x-2 border border-rose-500">
                    <img src={bin} alt='trash' className="w-5 h-5" />
                    <span className='font-semibold'>Delete</span>
                </button>
            </div>
        </div>
    );
};

export default CartItem;
