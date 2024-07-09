import React from 'react';
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = [
        {
        id: 1,
        name: 'Cozy Cuddle Cave',
        quantity: 1,
        price: 39.99,
        image: 'path_to_image_1',
        },
        {
        id: 2,
        name: 'Feline Hideaway have',
        quantity: 2,
        price: 85.98,
        image: 'path_to_image_2',
        },
    ];

    

    return (
        <div className="p-8 grid grid-cols-2 space-x-[180px]">        
        <div className="bg-white p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
            ))}
        </div>
        <div className="bg-[#f6faf9] rounded-lg p-10 mb-8">
            <div className='flex space-x-[150px]'>
                <h3 className="text-lg font-semibold">Estimated total</h3>
                <p className="text-lg">$125.97</p>
            </div>
            <p className='text-sm'>Taxes, discounts and shipping are calculated at checkout</p>                
            <div className="items-center mt-4 flex space-x-[150px]">
            <div>
                <input type="checkbox" id="shippingProtection" className="mr-2" />
                <label htmlFor="shippingProtection">Shipping Protection</label>
            </div>            
            <h3>$5.65</h3>
            </div>
            <div className='flex flex-col'>
                <button className="bg-[#005858] text-white py-2 px-3 rounded-3xl mt-4">Checkout</button>
                <button className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg mt-4 ml-4">G Pay</button>
                <button className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg mt-4 ml-4">Apple Pay</button>
            </div>
            
        </div>
        </div>
    );
};

export default Cart;
