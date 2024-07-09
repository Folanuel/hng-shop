import React from 'react'
import Cart from '../components/Cart';
import Card from '../components/Card';
import img1 from '../images/Frame 6img1.png';
import img2 from '../images/Frame 6img2.png';
import img3 from '../images/Frame 6img3.png';
import img4 from '../images/Frame 6img4.png';


const Checkout = () => {
    return (
        <div className="bg-white p-8">
        <Cart />    
        <div className='bg-[#f6faf9] '>
        <h1 className='mb-4 text-center font-bold text-lg'>Related Products</h1>
        <div className='pl-[50px] justify-center items-center md:flex md:px-[130px]'>
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
        </div>
                        
        </div>    
        </div>
    )
}

export default Checkout