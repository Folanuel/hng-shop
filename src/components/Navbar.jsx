import React, { useState } from 'react';
import Logo from '../images/VectorLogopaws.png';
import cartlogo from '../images/Vectorcart logo.png';
import acclogo from '../images/Useraccountlogo.png';
import helplogo from '../images/help_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 2helplogo.png';
import arrowlogo from '../images/arrow_drop_downarrowdown.png';
import { PiHamburgerBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="w-full py-8 drop-shadow-xl bg-[#005858] flex justify-between items-center">
            <div className="flex items-center justify-between w-full md:space-x-[250px]">
                {/* Logo on the left */}
                <Link to="/">
                    <img src={Logo} alt="Logo" className="mr-4 md:pl-12 cursor-pointer" />
                </Link>
                {/* Hamburger icon for mobile */}
                <button onClick={toggleMobileMenu} className="md:hidden text-white">
                    <PiHamburgerBold size={30} />
                </button>
                {/* Menu */}
                <div className="hidden md:flex md:flex-grow md:justify-center">
                    <ul className="flex space-x-8">
                        <li><Link to="/" className="text-m text-white font-bold font-sans">About</Link></li>
                        <li className='flex space-x-1'><Link to="/" className="text-m text-white font-bold font-sans">Category</Link><img src={arrowlogo} alt="Logo" className="cursor-pointer" /></li>
                        <li><Link to="/" className="text-m text-white font-bold font-sans">Services</Link></li>
                    </ul>
                </div>
                {/* Contact on the right for desktop */}
                <div className="hidden md:flex space-x-10 pr-9">
                    <div className='flex space-x-1'><img src={acclogo} alt="Logo" className="cursor-pointer" /><Link to="/" className="text-m text-white font-bold font-sans">Account</Link><img src={arrowlogo} alt="Logo" className="cursor-pointer" /></div>
                    <div className='flex space-x-1'><img src={helplogo} alt="Logo" className="cursor-pointer" /><Link to="/" className="text-m text-white font-bold font-sans">Help</Link><img src={arrowlogo} alt="Logo" className="cursor-pointer" /></div>
                    <div className='flex space-x-1'><img src={cartlogo} alt="Logo" className="cursor-pointer" /><Link to="/checkout" className="text-m text-white font-bold font-sans">Cart</Link></div>
                </div>
            </div>
            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-[80px] left-0 w-full bg-[#005858] flex flex-col items-center md:hidden">
                    <ul className="flex flex-col space-y-4">
                        <li><Link to="/" className="text-m text-white font-bold font-sans" onClick={toggleMobileMenu}>About</Link></li>
                        <li className='flex space-x-1'><Link to="/" className="text-m text-white font-bold font-sans" onClick={toggleMobileMenu}>Category</Link><img src={arrowlogo} alt="Logo" className="cursor-pointer" /></li>
                        <li><Link to="/" className="text-m text-white font-bold font-sans" onClick={toggleMobileMenu}>Services</Link></li>
                        <li className='flex space-x-1'><img src={acclogo} alt="Logo" className="cursor-pointer" /><Link to="/" className="text-m text-white font-bold font-sans" onClick={toggleMobileMenu}>Account</Link><img src={arrowlogo} alt="Logo" className="cursor-pointer" /></li>
                        <li className='flex space-x-1'><img src={helplogo} alt="Logo" className="cursor-pointer" /><Link to="/" className="text-m text-white font-bold font-sans" onClick={toggleMobileMenu}>Help</Link><img src={arrowlogo} alt="Logo" className="cursor-pointer" /></li>
                        <li className='flex space-x-1'><img src={cartlogo} alt="Logo" className="cursor-pointer" /><Link to="/checkout" className="text-m text-white font-bold font-sans" onClick={toggleMobileMenu}>Cart</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
