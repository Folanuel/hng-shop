import React, { useState } from 'react';
import Logo from '../images/VectorLogopaws.png'
import cartlogo from '../images/Vectorcart logo.png'
import acclogo from '../images/Useraccountlogo.png'
import helplogo from '../images/help_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 2helplogo.png'
import arrowlogo from '../images/arrow_drop_downarrowdown.png'
import { PiHamburgerBold } from "react-icons/pi";
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

// fixed z-[100]

    return (
        <nav className="w-full py-8 drop-shadow-xl bg-[#005858] flex justify-between items-center  ">
        <div className="flex items-center space-x-[250px]">
            {/* Logo on the left */}
            <Link to="/">
            <img src={Logo} alt="Logo" className=" mr-4 md:pl-12 cursor-pointer" />
            </Link>            
            {/* Menu */}
            <div className="hidden md:flex-grow md:flex md:justify-center ">
            <ul className="flex space-x-8">
            <li><Link to="/" className="text-m text-white font-bold font-sans">About</Link></li>
            <li className='flex space-x-1'><Link to="/" className="text-m text-white font-bold font-sans">Category</Link><img src={arrowlogo} alt="Logo" className="cursor-pointer" /></li>
            <li><Link to="/" className="text-m text-white font-bold font-sans">Services</Link></li>
            </ul>
            </div>
        </div>
        {/* Contact on the right */}
        <div>           
            <ul className="flex space-x-10 pr-9">
            <li className='flex space-x-1'><img src={acclogo} alt="Logo" className="cursor-pointer" /><Link to="/" className="text-m text-white font-bold font-sans">Account</Link><img src={arrowlogo} alt="Logo" className="cursor-pointer" /></li>
            <li className='flex space-x-1'><img src={helplogo} alt="Logo" className="cursor-pointer" /><Link to="/" className="text-m text-white font-bold font-sans">Help</Link><img src={arrowlogo} alt="Logo" className="cursor-pointer" /></li>
            <li className='flex space-x-1'><img src={cartlogo} alt="Logo" className="cursor-pointer" /><Link to="/vision" className="text-m text-white font-bold font-sans">Cart</Link></li>
            </ul>
        </div>
        {/* Hamburger Menu Icon - Display on Mobile */}
            <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="text-xl text-black hover:text-red-600">
                    <PiHamburgerBold className='text-xl' />
                </button>
            </div>
            {/* Mobile Menu - Display on Mobile */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 right-4 bg-white border border-gray-300 shadow-lg rounded-md">
                    <ul className="py-2">
                        <li><Link to="/menu" className="block px-4 py-2 text-xl text-black hover:text-red-600">Menu</Link></li>
                        <li><Link to="/faqs" className="block px-4 py-2 text-xl text-black hover:text-red-600">FAQs</Link></li>
                        <li><Link to="/vision" className="block px-4 py-2 text-xl text-black hover:text-red-600">About</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;