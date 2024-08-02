// - - - - - - - - - - - - - - - -   C A R T P A G E    W I T H  D I S P L A Y   C A R T   I T E M S   &   C L E AR   C A RT   F U N C T I O N A L I T Y - - - - - - -

import React, { useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext"; // Ensure this path is correct
import Header from "../Header/Header"; // Import your Header component
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import "./CartPage.css"; // Import your CSS file
import Footer from "../../Footer/Footer";
import axios from "axios";

const CartPage = () => {
    const { getCartItems, getCartCount, clearCart } = useCart(); // Use useCart to get cart items and count
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get("http://localhost:8081/api/cart", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("Cart Items Response:", response.data);
            setCartItems(response.data.items);
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    const handleBackHome = () => {
        navigate("/userPage"); // Redirect to home
    };

    const handlePlaceOrder = () => {
        // Implement place order logic
        alert("Place Order button clicked");
    };

    const handleClearCart = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.delete(
                "http://localhost:8081/api/cart/clear",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            // Clear the cart items state
            setCartItems([]);
            console.log("Cart cleared successfully");
        } catch (error) {
            console.error("Error clearing cart:", error);
        }
    };

    if (!cartItems) {
        return <p>Loading...</p>; // or handle the undefined state appropriately
    }

    // Calculate the total price for each item and the overall total
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.food.price * item.quantity,
        0
    );

    return (
        <>
            <Header /> {/* Include the header */}
            <main className="cart-page">
                <div className="container">
                    <h2>Your Cart</h2>
                    <p className="cart-count">Cart Count: {getCartCount()}</p>
                    <div className="box">
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Food Name</th>
                                    <th>Price</th>
                                    <th>Calories</th>
                                    <th>Quantity</th> {/* New column header */}
                                    <th>Total Price</th> {/* New column header */}
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="no-items">
                                            No items in cart
                                        </td>
                                    </tr>
                                ) : (
                                    cartItems.map((item) => (
                                        <tr key={item.cartItemId}>
                                            <td>
                                                <img
                                                    src={item.food.images[0]}
                                                    alt={item.food.foodName}
                                                    className="cart-item-image"
                                                />
                                            </td>
                                            <td>{item.food.foodName}</td>
                                            <td>Rs {item.food.price}</td>
                                            <td>{item.food.calories}</td>
                                            <td>{item.quantity}</td> {/* Show item quantity */}
                                            <td>
                                                Rs {(item.food.price * item.quantity).toFixed(2)}
                                            </td>{" "}
                                            {/* Show item total price */}
                                        </tr>
                                    ))
                                )}
                            </tbody>
                            {cartItems.length > 0 && (
                                <tfoot>
                                    <tr>
                                        <td colSpan="5" className="text-end">
                                            Total Price:
                                        </td>
                                        <td>Rs {totalPrice.toFixed(2)}</td>{" "}
                                        {/* Display total price */}
                                    </tr>
                                </tfoot>
                            )}
                        </table>
                    </div>
                    <div className="cart-buttons">
                        <button onClick={handleBackHome} className="btn btn-primary">
                            Back Home
                        </button>
                        <button onClick={handlePlaceOrder} className="btn btn-success">
                            Place Order
                        </button>
                        <button onClick={handleClearCart} className="btn btn-danger">
                            Clear Cart
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default CartPage;
