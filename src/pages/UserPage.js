 // - - - - - - - - - - - - - - - -   U S E R P A G E   ( F O R   C U S T O M E R S   O N L Y   A F T E R   LO G I N )   - - - - - - - 

import React, { useState } from "react";
import Header from "../components/User/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Vendor from "../components/User/VendorSection/Vendor";
import MenuSection from "../components/User/MenuSection/MenuSection";
import ChefsSection from "../components/ChefsSection/ChefsSection";
import AboutSection from "../components/AboutSection/AboutSection";
import Footer from "../components/Footer/Footer";

const UserPage = () => {
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleSelectVendor = (vendor) => {
    setSelectedVendor(vendor);
  };

  const handleAddItem = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setCartItemCount((prevCount) => prevCount + 1); // Increment the cart item count
  };

  return (
    <div>
      <Header
        cartItemCount={cartItemCount}
        updateCartItemCount={setCartItemCount}
      />
      <HeroSection />
      <section id="vendor">
        <Vendor
          selectedVendor={selectedVendor}
          onSelectVendor={handleSelectVendor}
        />
      </section>
      <MenuSection selectedVendor={selectedVendor} onAddItem={handleAddItem} />
      <AboutSection />
      <ChefsSection />
      <Footer />
    </div>
  );
};

export default UserPage;
