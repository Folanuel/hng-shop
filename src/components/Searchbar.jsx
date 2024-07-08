import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
    return (
        <nav className="w-full p-4 bg-[#008080] shadow-md">
            <div className="flex justify-center">
                <div className="relative w-full max-w-lg">
                    <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Find the best for your pet" 
                    />
                    <span className="absolute inset-y-0 right-4 flex items-center pl-2">
                        <FaSearch className="text-black" />
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Searchbar;
