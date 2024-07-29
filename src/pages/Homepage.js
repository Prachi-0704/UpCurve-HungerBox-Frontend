// src/components/Homepage.js
import React, { useState } from 'react';
import HeroSection from '../components/Home/HeroSection';
import Vendor from '../components/Home/Vendor';
import MenuSection from '../components/Home/MenuSection';
import AboutSection from '../components/Home/AboutSection';
import ChefsSection from '../components/Home/ChefsSection';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

//import './Homepage.css'; // Optional: Create a CSS file for styling if needed

const Homepage = () => {
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const handleSelectVendor = (vendor) => {
        setSelectedVendor(vendor);
    };

    const handleAddItem = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    return (
        <div className="homepage">
            <Header />
            <HeroSection />
            <Vendor
                selectedVendor={selectedVendor}
                onSelectVendor={handleSelectVendor}
            />
            <MenuSection
                selectedVendor={selectedVendor}
                onAddItem={handleAddItem}
            />
            <AboutSection />
            <ChefsSection />
            <Footer />
        </div>
    );
};

export default Homepage;
