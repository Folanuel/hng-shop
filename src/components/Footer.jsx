import React from 'react'
import Paw from '../images/Paw and Purr Logo markfootpurrlogo.png'
// import Ig from '../assets/InstagramIG.png'
// import X from '../assets/TwitterTwitter.png'
// import Meta from '../assets/Frame 48096462facebook.png'
// import In from '../assets/Frame 48096461linkedin.png'



const Footer = () => {
    return (
        <div>        
        <div className=' bg-[#005858] py-4 md:px-[130px] pt-10 md:flex md:items-center  text-white'>
            <div className='space-y-5  pr-56'>
                <img src={Paw} alt='logo' className='' />
                <p>Follow Us</p>                
                {/* <div className='flex'>
                <img src={Ig} alt='instagram' className='' />
                <img src={X} alt='twitter' className='' />
                <img src={Meta} alt='facebook' className='' />
                
                </div> */}
            </div>
            <div className='py-5 md:py-0 md:flex md:flex-row md:space-x-20 '>
                <div className='space-y-4'>
                <h1 className='text-xl font-bold pb-5'>Pet</h1>
                <h2>Cat</h2>
                <h2>Dog</h2>                
            </div>
            <div className='space-y-4 py-5 md:py-0'>
                <h1 className='text-xl font-bold pb-5'>Shop</h1>
                <h2 >New</h2>
                <h2>Toys</h2>                
                <h2>Treats</h2>                
                <h2>Chews</h2>                
                <h2>Sale</h2>                
            </div>
            <div className='space-y-4 py-5 md:py-0'>
                <h1 className='text-xl font-bold pb-5'>Info</h1>
                <h2>Shipping</h2>                
                <h2>Returns</h2>
                <h2>Refunds</h2>
                <h2>FAQ</h2>
            </div>
            <div className='space-y-4 py-5 md:py-0'>
                <h1 className='text-xl font-bold pb-5'>Legal</h1>
                <h2 className=''>Terms and Conditions</h2>
                <h2>Privacy and Policy</h2>               
            </div>
            </div>
            
            
        </div>

        </div>
    )
}

export default Footer