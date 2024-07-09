import React, { useState } from 'react';
import Card from './Card';
import img1 from '../images/Frame 6img1.png';
import img2 from '../images/Frame 6img2.png';
import img3 from '../images/Frame 6img3.png';
import img4 from '../images/Frame 6img4.png';
import img5 from '../images/Frame 6img5.png';
import img6 from '../images/Frame 6img6.png';
import img7 from '../images/Frame 6img7.png';
import img8 from '../images/Frame 6img8.png';
import img9 from '../images/Frame 6img9.png';
import img10 from '../images/Frame 6img10.png';
import img11 from '../images/Frame 6img11.png';
import img12 from '../images/Frame 6img12.png';
import img13 from '../images/Frame 6img13.png';
import img14 from '../images/Frame 6img14.png';
import img15 from '../images/Frame 6img15.png';
import Price from '../images/Continuousprice range.png';
import star5 from '../images/Rating5stars.png';
import star4 from '../images/Ratingratingstar.png';
import star3 from '../images/Rating2stars.png';
import star2 from '../images/Rating2stars.png';
import star1 from '../images/Rating1star.png';

const Product = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const products = [
        { img: img1, title: "Cozy Cuddle Cave", description: "The purr-fect hideaway for your furry friend", price: 29.99 },
        { img: img2, title: "Recycled Rope Toy", description: "Eco-friendly toy for endless fun", price: 19.99 },
        { img: img3, title: "Feather Teaser Toy", description: "Interactive toy for playful cats", price: 39.99 },
        { img: img4, title: "The Wolf IQ Ball", description: "Challeng your Dogs mind and keep them active", price: 24.99 },
        { img: img5, title: "Cozy Cat Bed", description: "Soft and warm bed for cat", price: 59.99 },
        { img: img6, title: "Customizable Pet Collar", description: "Personalized collar with name tag", price: 14.99 },
        { img: img7, title: "Catnip Infused Mouse Toy", description: "Irrestible toy for cats to chase", price: 34.99 },
        { img: img8, title: "Plosh Squeaky Toy", description: "Soft toy wit a squeaker inside", price: 9.99 },
        { img: img9, title: "Luxurious Custom Pet Bed", description: "Comfortable and stylish custom pet bed.", price: 44.99 },
        { img: img10, title: "Stainless Steel Feeding Bowl", description: "Durable and easy to clean feeding bowl", price: 49.99 },
        { img: img11, title: "Cooling Mat", description: "Keeps your pet cool during hot days", price: 54.99 },
        { img: img12, title: "Scratching Post", description: "Sturdy post for cats to scratch and climb", price: 11.99 },
        { img: img13, title: "Harness", description: "For dogswho love to explore", price: 28.99 },
        { img: img14, title: "Interactive Laser Toy", description: "Lose pointer for hours of play", price: 23.99 },
        { img: img15, title: "Waterproof Dog Jacket", description: "Keep Your dog dry and comfortable", price: 33.99 }
    ];

    const items = [
        'Collars, Leashes & Harnesses',
        'Beds & Furnitures',
        'Toys & Scratchers',
        'Bowls &Feedets',
        'Grooming Supplies',
        'Apparel & Accessories',
        'Treats & Supplements',
        'Litter & Litter Boxes',
        'Carriers & Travels'
    ];
    const items1 = ['Puppy', 'Kitten', 'Adult', 'Senior', 'All Stages'];
    const items2 = [star5, star4, star3, star2, star1];

    return (
        <div className="flex flex-col md:flex-row md:pl-[200px]">
            <div className="p-4 md:hidden">
                <button
                    onClick={toggleFilter}
                    className="bg-[#005858] text-white rounded px-4 py-2"
                >
                    {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
                </button>
                {isFilterOpen && (
                    <div className="mt-4">
                        <FilterSection
                            title="Product Type"
                            items={items}
                            isImage={false}
                        />
                        <FilterSection
                            title="Age"
                            items={items1}
                            isImage={false}
                        />
                        <FilterSection
                            title="Rating"
                            items={items2}
                            isImage={true}
                        />
                        <PriceRangeSection />
                    </div>
                )}
            </div>
            <div className="hidden md:block md:w-1/4 p-4">
                <FilterSection
                    title="Product Type"
                    items={items}
                    isImage={false}
                />
                <FilterSection
                    title="Age"
                    items={items1}
                    isImage={false}
                />
                <FilterSection
                    title="Rating"
                    items={items2}
                    isImage={true}
                />
                <PriceRangeSection />
            </div>
            <div className="p-4 md:w-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product, index) => (
                        <Card
                            key={index}
                            picture={product.img}
                            title={product.title}
                            description={product.description}                            
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const FilterSection = ({ title, items, isImage }) => (
    <div className="mb-10">
        <h1 className="font-bold pb-4">{title}</h1>
        <div className="grid grid-rows-4 gap-4">
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {isImage ? <img src={item} alt={title} /> : <span>{item}</span>}
                </div>
            ))}
        </div>
        <div className="h-[0.1px] w-full bg-gray-400 mt-10"></div>
    </div>
);

const PriceRangeSection = () => (
    <div className="mb-10">
        <h1 className="font-bold pb-4 pt-4">Price Range</h1>
        <img src={Price} alt="Price Range" className="mb-4" />
        <div className="grid grid-cols-2 gap-8">
            <p className="rounded-lg border border-gray-300 bg-white px-2 py-2 text-center cursor-pointer hover:bg-gray-100 transition-all duration-200">0</p>
            <p className="rounded-lg border border-gray-300 bg-white px-2 py-2 text-center cursor-pointer hover:bg-gray-100 transition-all duration-200">250</p>
        </div>
        <p className="bg-[#005858] text-white rounded-3xl w-fit mt-4 px-5 py-2 cursor-pointer">Update</p>
        <div className="h-[0.1px] w-full bg-gray-400 mt-10"></div>
    </div>
);

export default Product;
