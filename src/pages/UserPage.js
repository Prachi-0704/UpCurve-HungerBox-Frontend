import React, { useState } from "react";
import Header from "../components/User/Header";
import HeroSection from "../components/Home/HeroSection";
import Vendor from "../components/User/Vendor";
import MenuSection from "../components/User/MenuSection";
import ChefsSection from "../components/Home/ChefsSection";
import AboutSection from "../components/Home/AboutSection";
import Footer from "../components/Home/Footer";

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
      <Vendor
        selectedVendor={selectedVendor}
        onSelectVendor={handleSelectVendor}
      />
      <MenuSection selectedVendor={selectedVendor} onAddItem={handleAddItem} />
      <AboutSection />
      <ChefsSection />
      <Footer />
    </div>
  );
};

export default UserPage;
