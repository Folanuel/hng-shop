import React from 'react';
import img1 from '../images/Categoriesp&p.png';
import img2 from '../images/Categoriespawfect.png';
import img3 from '../images/Categoriespurrtastic.png';

const Threecats = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#f6faf9] px-4 sm:px-8 md:px-16 pt-9 pb-8 mb-5'>
            <img src={img1} alt='Paws and Purrs' className='w-[150px] h-[150px] md:w-[200px] md:h-[180px] mx-auto'/>
            <img src={img2} alt='Pawfect Companions' className='w-[150px] h-[150px] md:w-[200px] md:h-[180px] mx-auto'/>
            <img src={img3} alt='Purrstatic Kitties' className='w-[150px] h-[150px] md:w-[200px] md:h-[180px] mx-auto'/>
        </div>
    )
}

export default Threecats;
