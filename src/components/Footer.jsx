import React from 'react';
import Paw from '../images/Paw and Purr Logo markfootpurrlogo.png';
import Ig from '../images/Social mediaig.png';
import X from '../images/Social mediatwitter.png';
import Meta from '../images/Social mediafacebook.png';
import Pinterest from '../images/Social mediapinterest.png';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#005858] py-10 px-4 md:px-[130px] text-white'>
                <div className='md:flex md:justify-between md:items-center'>
                    <div className='space-y-5 mb-10 md:mb-0 md:pr-56'>
                        <img src={Paw} alt='logo' className='mx-auto md:pl-6' />
                        <p className='font-bold text-lg text-center'>Follow Us</p>
                        <div className='flex justify-center space-x-2'>
                            <img src={Ig} alt='instagram' className='' />
                            <img src={X} alt='twitter' className='' />
                            <img src={Meta} alt='facebook' className='' />
                            <img src={Pinterest} alt='pinterest' className='' />
                        </div>
                    </div>
                    <div className='md:flex md:space-x-20'>
                        <div className='space-y-4 mb-10 md:mb-0'>
                            <h1 className='text-xl font-bold pb-5'>Pet</h1>
                            <h2>Cat</h2>
                            <h2>Dog</h2>
                        </div>
                        <div className='space-y-4 mb-10 md:mb-0'>
                            <h1 className='text-xl font-bold pb-5'>Shop</h1>
                            <h2>New</h2>
                            <h2>Toys</h2>
                            <h2>Treats</h2>
                            <h2>Chews</h2>
                            <h2>Sale</h2>
                        </div>
                        <div className='space-y-4 mb-10 md:mb-0'>
                            <h1 className='text-xl font-bold pb-5'>Info</h1>
                            <h2>Shipping</h2>
                            <h2>Returns</h2>
                            <h2>Refunds</h2>
                            <h2>FAQ</h2>
                        </div>
                        <div className='space-y-4'>
                            <h1 className='text-xl font-bold pb-5'>Legal</h1>
                            <h2 className=''>Terms and Conditions</h2>
                            <h2>Privacy and Policy</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#008080] text-center p-6'>
                <p className='text-white'>2024 Designed and Developed with love</p>
            </div>
        </div>
    );
}

export default Footer;
