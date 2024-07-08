import React, { useState } from 'react';
import Logo from '../images/VectorLogopaws.png'
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
            <li><Link to="/menu" className="text-xl text-white font-bold font-sans">About</Link></li>
            <li><Link to="/faqs" className="text-xl text-white font-bold font-sans">Category</Link></li>
            <li><Link to="/vision" className="text-xl text-white font-bold font-sans">Services</Link></li>
            </ul>
            </div>
        </div>
        {/* Contact on the right */}
        <div>           
            <ul className="flex space-x-8 pr-9">
            <li><Link to="/menu" className="text-xl text-white font-bold font-sans">Account</Link></li>
            <li><Link to="/faqs" className="text-xl text-white font-bold font-sans">Help</Link></li>
            <li><Link to="/vision" className="text-xl text-white font-bold font-sans">Cart</Link></li>
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