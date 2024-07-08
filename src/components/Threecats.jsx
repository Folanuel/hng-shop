import React from 'react'
import img1 from '../images/Categoriesp&p.png'
import img2 from '../images/Categoriespawfect.png'
import img3 from '../images/Categoriespurrtastic.png'

const Threecats = () => {
    return (
        <div className='grid grid-cols-3 gap-4 bg-[#f6faf9] px-16 pt-9 pb-8 mb-5 pl-[200px]'>
            <img src={img1} alt='Paws and Purrs' className='w-[200px] h-[180px]'/>
            <img src={img2} alt='Pawfect Companions' className='w-[200px] h-[180px]' />
            <img src={img3} alt='Purrstatic Kitties' className='w-[200px] h-[180px]'/>
        </div>
    )
}

export default Threecats