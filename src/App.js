
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./components/Home/Login/Login"; // Adjust the path as needed
import Register from "./components/Home/Register/Register"; // Adjust the path as needed
import UserPage from "./Pages/UserPage";
import CartPage from "./components/User/CartPage/CartPage";
import { CartProvider } from "./context/CartContext";
import VendorSection from "./Pages/VendorPage";

const App = () => {

  const [loggedInStatus, setLoggedInStatus] = useState(false);

  useEffect(() => {

    // Check if user is already logged in by looking for a token

    const token = localStorage.getItem("token");

    if (token) {
      setLoggedInStatus(true);
    }

  }, []);

  return (
    <Router>

      <CartProvider>

        <Routes>
          
          <Route path="/" element={<Homepage />} />

          <Route

            path="/login"

            element={<Login setLoggedInStatus={setLoggedInStatus} />}
          />

          <Route path="/register" element={<Register />} />

          <Route path="/vendorPage" element={<VendorSection />} />

          <Route path="/userPage" element={<UserPage />} />

          <Route path="/cart" element={<CartPage />} />

        </Routes>

      </CartProvider>
      
    </Router>
  );
};

export default App;
