// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaUser, FaShoppingCart } from 'react-icons/fa';
// import { useCart } from '../../context/CartContext'; // Import useCart
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './Header.css'; // Import your custom CSS file

// const Header = () => {
//     const { getCartCount } = useCart(); // Use useCart to get cart count
//     const [showLogout, setShowLogout] = React.useState(false);
//     const navigate = useNavigate();

//     const handleProfileClick = () => {
//         setShowLogout((prevState) => !prevState);
//     };

//     const handleCartClick = () => {
//         navigate('/cart');
//     };

//     const totalItems = getCartCount(); // Get total items from context

//     return (
//         <header id="header" className="header sticky-top bg-white shadow-sm leftcorner">
//             <div className="container d-flex align-items-center justify-content-between py-2">
//                 <div className="d-flex align-items-center flex-grow-1">
//                     <a href="/" className="logo d-flex align-items-center me-4">
//                         <h1 className='ml=0'>HungerBox</h1>
//                         <span>.</span>
//                     </a>
//                     <nav id="navmenu" className="navmenu d-flex flex-grow-1 justify-content-center">
//                         <ul className="nav mb-0">
//                             <li className="nav-item"><a href="#hero" className="nav-link active">Home</a></li>
//                             <li className="nav-item"><a href="#vendor" className="nav-link">Vendor</a></li>
//                             <li className="nav-item"><a href="#menu" className="nav-link">Menu</a></li>
//                             <li className="nav-item"><a href="#orders" className="nav-link">Orders</a></li>
//                             <li className="nav-item"><a href="#wallet" className="nav-link">Wallet</a></li>
//                         </ul>
//                     </nav>
//                 </div>
//                 <div className="d-flex align-items-center">
//                     <div className="profile-container me-3">
//                         <FaUser className="profile-icon" onClick={handleProfileClick} />
//                         {showLogout && (
//                             <div className="logout-menu position-absolute bg-white border rounded shadow-sm p-2 mt-1">
//                                 <Link to="/logout" className="text-decoration-none">Logout</Link>
//                             </div>
//                         )}
//                     </div>
//                     <div className="cart-icon-container position-relative" onClick={handleCartClick}>
//                         <FaShoppingCart className="cart-icon" />
//                         {totalItems > 0 && <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalItems}</span>}
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;








// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaUser, FaShoppingCart } from 'react-icons/fa';
// import { useCart } from '../../context/CartContext'; // Import useCart
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './Header.css'; // Import your custom CSS file

// import axios from 'axios';

// const Header = () => {
//     const { getCartCount } = useCart(); // Use useCart to get cart count

//     // const { getCartItems, getCartCount, clearCart } = useCart();
//     const [showLogout, setShowLogout] = React.useState(false);
//     const navigate = useNavigate();

//     const [cartItems, setCartItems] = useState([]);
//     const [cartItemCount, setCartItemCount] = useState(0);

//     useEffect(() => {
//         fetchCartItems();
//     }, []);

//     useEffect(() => {
//         setCartItemCount(cartItems.length);
//     }, []);

//     const fetchCartItems = async () => {
//         const token = localStorage.getItem('token');
//         try {
//             const response = await axios.get('http://localhost:8081/api/cart', {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`
//                 }
//             });
//             console.log('Cart Items Response:', response.data);
//             setCartItems(response.data.items);
//         } catch (error) {
//             console.error('Error fetching cart items:', error);
//         }
//     };

//     const handleProfileClick = () => {
//         setShowLogout((prevState) => !prevState);
//     };

//     const handleCartClick = () => {
//         navigate('/cart');
//     };

//     return (
//         <header id="header" className="header sticky-top bg-white shadow-sm leftcorner">
//             <div className="container d-flex align-items-center justify-content-between py-2">
//                 <div className="d-flex align-items-center flex-grow-1">
//                     <a href="/" className="logo d-flex align-items-center me-4">
//                         <h1 className='ml=0'>HungerBox</h1>
//                         <span>.</span>
//                     </a>
//                     <nav id="navmenu" className="navmenu d-flex flex-grow-1 justify-content-center">
//                         <ul className="nav mb-0">
//                             <li className="nav-item"><a href="#hero" className="nav-link active">Home</a></li>
//                             <li className="nav-item"><a href="#vendor" className="nav-link">Vendor</a></li>
//                             <li className="nav-item"><a href="#menu" className="nav-link">Menu</a></li>
//                             <li className="nav-item"><a href="#orders" className="nav-link">Orders</a></li>
//                             <li className="nav-item"><a href="#wallet" className="nav-link">Wallet</a></li>
//                         </ul>
//                     </nav>
//                 </div>
//                 <div className="d-flex align-items-center">
//                     <div className="profile-container me-3">
//                         <FaUser className="profile-icon" onClick={handleProfileClick} />
//                         {showLogout && (
//                             <div className="logout-menu position-absolute bg-white border rounded shadow-sm p-2 mt-1">
//                                 <Link to="/logout" className="text-decoration-none">Logout</Link>
//                             </div>
//                         )}
//                     </div>
//                     <div className="cart-icon-container position-relative" onClick={handleCartClick}>
//                         <FaShoppingCart className="cart-icon" />
//                         {cartItemCount > 0 && <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartItemCount}</span>}
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;


















import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Header.css'; // Import your custom CSS file
import axios from 'axios';

const Header = ({ cartItemCount, updateCartItemCount }) => {
    const [showLogout, setShowLogout] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get('http://localhost:8081/api/cart', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Cart Items Response:', response.data);
            updateCartItemCount(response.data.items.length); // Update cart item count
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const handleProfileClick = () => {
        setShowLogout((prevState) => !prevState);
    };

    const handleCartClick = () => {
        navigate('/cart');
    };

    return (
        <header id="header" className="header sticky-top bg-white shadow-sm leftcorner">
            <div className="container d-flex align-items-center justify-content-between py-2">
                <div className="d-flex align-items-center flex-grow-1">
                    <a href="/" className="logo d-flex align-items-center me-4">
                        <h1 className='ml=0'>HungerBox</h1>
                        <span>.</span>
                    </a>
                    <nav id="navmenu" className="navmenu d-flex flex-grow-1 justify-content-center">
                        <ul className="nav mb-0">
                            <li className="nav-item"><a href="#hero" className="nav-link active">Home</a></li>
                            <li className="nav-item"><a href="#vendor" className="nav-link">Vendor</a></li>
                            <li className="nav-item"><a href="#menu" className="nav-link">Menu</a></li>
                            <li className="nav-item"><a href="#orders" className="nav-link">Orders</a></li>
                            <li className="nav-item"><a href="#wallet" className="nav-link">Wallet</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="d-flex align-items-center">
                    <div className="profile-container me-3">
                        <FaUser className="profile-icon" onClick={handleProfileClick} />
                        {showLogout && (
                            <div className="logout-menu position-absolute bg-white border rounded shadow-sm p-2 mt-1">
                                <Link to="/logout" className="text-decoration-none">Logout</Link>
                            </div>
                        )}
                    </div>
                    <div className="cart-icon-container position-relative" onClick={handleCartClick}>
                        <FaShoppingCart className="cart-icon" />
                        {cartItemCount > 0 && <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartItemCount}</span>}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
