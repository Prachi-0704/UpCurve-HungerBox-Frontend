import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./components/Home/Login"; // Adjust the path as needed
import Register from "./components/Home/Register"; // Adjust the path as needed
import UserPage from "./Pages/UserPage";
import PrivateRoute from "./components/PrivateRoute"; // Import the PrivateRoute component
import CartPage from "./components/User/CartPage";
import { CartProvider } from "./context/CartContext";

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
          <Route
            path="/userPage"
            element={
              <PrivateRoute loggedInStatus={loggedInStatus}>
                <UserPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <PrivateRoute loggedInStatus={loggedInStatus}>
                <CartPage loggedInStatus={loggedInStatus} />
              </PrivateRoute>
            }
          />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
