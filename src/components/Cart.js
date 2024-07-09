import React from 'react';
import CartItem from './CartItem';
import img1 from '../images/Frame 6img1.png'
import img2 from '../images/Frame 6img2.png'
import google from '../images/Logogooglepay.png'
import apple from '../images/Groupapplelogo.png'

const Cart = () => {
    const cartItems = [
        {
            id: 1,
            name: 'Cozy Cuddle Cave',
            quantity: 1,
            price: 39.99,
            image: img1,
        },
        {
            id: 2,
            name: 'Feline Hideaway',
            quantity: 2,
            price: 85.98,
            image: img2,
        },
    ];

    return (
        <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:pl-[100px] md:space-x-10">
            <div className="bg-white p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <div>
                <h2 className="text-s font-semibold mb-4 text-[#005858] left-0">continue shipping</h2>
            <div className="bg-[#f6faf9] rounded-lg p-6 md:p-10 mb-8">
            
                <div className='flex justify-between'>
                    <h3 className="text-lg font-semibold">Estimated total</h3>
                    <p className="text-lg">$125.97</p>
                </div>
                <p className='text-sm'>Taxes, discounts and shipping are calculated at checkout</p>
                <div className="flex justify-between items-center mt-4">
                    <div>
                        <input type="checkbox" id="shippingProtection" className="mr-2" />
                        <label htmlFor="shippingProtection">Shipping Protection</label>
                    </div>
                    <h3>$5.65</h3>
                </div>
                <div className='flex flex-col space-y-4 mt-4'>
                    <button className="bg-[#005858] text-white py-2 px-3 rounded-3xl">Checkout</button>
                    <button className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg flex justify-center items-center">
                        <img src={google} alt="googlepay" className="cursor-pointer" />
                    </button>
                    <button className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg flex justify-center items-center space-x-2">
                        <img src={apple} alt="applepay" className="cursor-pointer" />
                        <span className='text-gray-600 text-xl'>Pay</span>
                    </button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Cart;
