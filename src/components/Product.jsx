import React from 'react';
import Card from './Card'
import img1 from '../images/Frame 6img1.png'
import img2 from '../images/Frame 6img2.png'
import img3 from '../images/Frame 6img3.png'
import img4 from '../images/Frame 6img4.png'
import img5 from '../images/Frame 6img5.png'
import img6 from '../images/Frame 6img6.png'
import img7 from '../images/Frame 6img7.png'
import img8 from '../images/Frame 6img8.png'
import img9 from '../images/Frame 6img9.png'
import img10 from '../images/Frame 6img10.png'
import img11 from '../images/Frame 6img11.png'
import img12 from '../images/Frame 6img12.png'
import img13 from '../images/Frame 6img13.png'
import img14 from '../images/Frame 6img14.png'
import img15 from '../images/Frame 6img15.png'
import Price from '../images/Continuousprice range.png'
import star5 from '../images/Rating5stars.png'
import star4 from '../images/Ratingratingstar.png'
import star3 from '../images/Rating2stars.png'
import star2 from '../images/Rating2stars.png'
import star1 from '../images/Rating1star.png'

const Product = () => {
    const items = ['Collars, Leashes & Harnesses', 'Beds & Furnitures', 'Toys & Scratchers', 'Bowls &Feedets', 'Grooming Supplies', 'Apparel & Accessories', 'Treats & Supplements', 'Litter & Litter Boxes', 'Carriers & Travels'];    
    const items1 = ['Puppy', 'Kitten', 'Adult', 'Senior', 'All Stages'];    
    const items2 = [star5, star4, star3, star2, star1];    

    return (
        <div className="flex pl-[205px]">
        <div className="p-4">
        <h1 className='font-bold pb-4'>Product Type</h1>
            <div className="grid grid-rows-4 gap-4">
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>{item}</span>
                </div>
            ))}
            </div>
            <div className="h-[0.1px] w-full bg-gray-400 mt-10"></div>
        <h1 className='font-bold pb-4 pt-4'>Age</h1>
            <div className="grid grid-rows-4 gap-4">
            {items1.map((item, index) => (
                <div key={index} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>{item}</span>
                </div>
            ))}
            </div>
            <div className="h-[0.1px] w-full bg-gray-400 mt-10"></div>
        <h1 className='font-bold pb-4 pt-4'>Rating</h1>
            <div className="grid grid-rows-4 gap-4">
            {items2.map((item, index) => (
                <div key={index} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <img src={item} alt={`Rating ${index + 1} stars`} />
                </div>
            ))}
            </div>
            <div className="h-[0.1px] w-full bg-gray-400 mt-10"></div>
            <h1 className='font-bold pb-4 pt-4'>Price Range</h1>
            <img src={Price} alt='Price Range' className=' mb-4' />
            <div className='grid grid-cols-2 gap-8'>
                <p className='rounded-lg border border-gray-300 bg-white px-2 py-2 text-center cursor-pointer hover:bg-gray-100 transition-all duration-200'>0</p>
                <p className='rounded-lg border border-gray-300 bg-white px-2 py-2 text-center cursor-pointer hover:bg-gray-100 transition-all duration-200'>250</p>
            </div>
            <p className='bg-[#005858] text-white rounded-3xl w-fit mt-4 px-5 py-2 cursor-pointer'>Update</p>
            
            <div className="h-[0.1px] w-full bg-gray-400 mt-10"></div>
        </div>
        <div className="p-4">
            <div className="grid grid-cols-3 gap-4">
                <Card 
                picture={img1}
                title="Sample Product"
                description="This is a sample product description."
                rating={4.5}
                price={29.99}
                />
                <Card 
                picture={img2}
                title="Sample Product"
                description="This is a sample product description."
                rating={4.5}
                price={29.99}
                />
                <Card 
                picture={img3}
                title="Sample Product"
                description="This is a sample product description."
                rating={4.5}
                price={29.99}
                />
                <Card 
                picture={img4}
                title="Sample Product"
                description="This is a sample product description."
                rating={4.5}
                price={29.99}
                />
                <Card 
                picture={img5}
                title="Sample Product"
                description="This is a sample product description."
                rating={4.5}
                price={29.99}
                />
                <Card 
                picture={img6}
                title="Sample Product"
                description="This is a sample product description."
                rating={4.5}
                price={29.99}
                />
                <Card 
                picture={img7}
                title="Sample Product"
                description="This is a sample product description."
                rating={4.5}
                price={29.99}
                />
                <Card 
                picture={img8}
                title="Sample Product"
                description="This is a sample product description."
                rating={4.5}
                price={29.99}
                />
                <Card 
                picture={img9}
                title="Sample Product"
                description="This is a sample product description."
                rating={4.5}
                price={29.99}
                />
                <Card 
                picture={img10}
                title="Sample Product"
                description="This is a sample product description."
                rating={4.5}
                price={29.99}
                />
                <Card 
                picture={img11}
                title="Sample Product"
                description="This is a sample product description."
                rating={4.5}
                price={29.99}
                />
                <Card 
                picture={img12}
                title="Sample Product"
                description="This is a sample product description."
                rating={4.5}
                price={29.99}
                />
                <Card 
                picture={img13}
                title="Sample Product"
                description="This is a sample product description."
                rating={4.5}
                price={29.99}
                />
                <Card 
                picture={img14}
                title="Sample Product"
                description="This is a sample product description."
                rating={4.5}
                price={29.99}
                />
                <Card 
                picture={img15}
                title="Sample Product"
                description="This is a sample product description."
                rating={4.5}
                price={29.99}
                />
            </div>
        </div>
        </div>
    );
};

export default Product;
