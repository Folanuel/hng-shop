import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Footer from './Footer';


const Layout = () => {
    return (
        <>
            <Navbar />
            <Searchbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout