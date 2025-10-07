import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>Content</div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;