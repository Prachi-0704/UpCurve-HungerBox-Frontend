// - - - - - - - - - - - - - - - -   H O M E P A G E   ( F O R   U S E R S   W H O   H A V E N' T   LO G G E D  I N )   - - - - - - - 


import React, { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Vendor from "../components/Home/VendorSection/Vendor";
import MenuSection from "../components/Home/MenuSection/MenuSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ChefsSection from "../components/ChefsSection/ChefsSection";
import Header from "../components/Home/Header/Header";
import Footer from "../components/Footer/Footer";

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
      <section id="vendorHome">
        <Vendor
          selectedVendor={selectedVendor}
          onSelectVendor={handleSelectVendor}
        />
      </section>
      <MenuSection selectedVendor={selectedVendor} onAddItem={handleAddItem} />
      <AboutSection />
      <ChefsSection />
      <section id="contact"></section>
      <Footer />
    </div>
  );
};

export default Homepage;
