// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Additems.css'; // Make sure to create this CSS file

// const Additems = ({ addedItems }) => {
//     const navigate = useNavigate();

//     return (
//         <div className="added-items-table">
//             <h2>Added Items</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Image</th>
//                         <th>Name</th>
//                         <th>Description</th>
//                         <th>Price</th>
//                         <th>Calories</th>
//                         <th>Quantity</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {addedItems.length > 0 ? (
//                         addedItems.map((item) => (
//                             <tr key={item.id}>
//                                 <td><img src={item.images[0]} alt={item.name} className="item-image" /></td>
//                                 <td>{item.foodName}</td>
//                                 <td>{item.description}</td>
//                                 <td>Rs {item.price}</td>
//                                 <td>{item.calories}</td>
//                                 <td>{item.quantity}</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="6">No items added yet.</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//             <button onClick={() => navigate('/')} className="btn btn-secondary mt-4">
//                 Back to Home
//             </button>
//             <button  className="btn btn-secondary mt-4">
//                 Place order
//             </button>
//         </div>
//     );
// };

// export default Additems;



// - - - - - -  - - - - - -  - - - - AddToCart API INTEGRATED - -  - - - - - -  - - - - - -  - - - - - - 




// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Additems.css'; // Make sure to create this CSS file

// const Additems = () => {
//     const [addedItems, setAddedItems] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchCartItems();
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
//             setAddedItems(response.data.items);
//         } catch (error) {
//             console.error('Error fetching cart items:', error);
//         }
//     };

//     return (
//         <div className="added-items-table">
//             <h2>Added Items</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Image</th>
//                         <th>Name</th>
//                         <th>Description</th>
//                         <th>Price</th>
//                         <th>Calories</th>
//                         <th>Quantity</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {addedItems.length > 0 ? (
//                         addedItems.map((item) => (
//                             <tr key={item.cartItemId}>
//                                 <td><img src={item.food.images[0]} alt={item.food.foodName} className="item-image" /></td>
//                                 <td>{item.food.foodName}</td>
//                                 <td>{item.food.description}</td>
//                                 <td>Rs {item.food.price}</td>
//                                 <td>{item.food.calories}</td>
//                                 <td>{item.quantity}</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="6">No items added yet.</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//             <button onClick={() => navigate('/')} className="btn btn-secondary mt-4">
//                 Back to Home
//             </button>
//             <button className="btn btn-secondary mt-4">
//                 Place order
//             </button>
//         </div>
//     );
// };

// export default Additems;



// - - - - - -  - - - - - -  - - - - AddToCart + ClearCart API INTEGRATED - -  - - - - - -  - - - - - -  - - - - - - 




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Additems.css'; // Make sure to create this CSS file

const Additems = () => {
    const [addedItems, setAddedItems] = useState([]);
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
            setAddedItems(response.data.items);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const handleClearCart = async () => {
        const token = localStorage.getItem('token');
        try {
            await axios.delete('http://localhost:8081/api/cart/clear', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            // Clear the cart items state
            setAddedItems([]);
            console.log('Cart cleared successfully');
        } catch (error) {
            console.error('Error clearing cart:', error);
        }
    };

    return (
        <div className="added-items-table">
            <h2>Added Items</h2>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Calories</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {addedItems.length > 0 ? (
                        addedItems.map((item) => (
                            <tr key={item.cartItemId}>
                                <td><img src={item.food.images[0]} alt={item.food.foodName} className="item-image" /></td>
                                <td>{item.food.foodName}</td>
                                <td>{item.food.description}</td>
                                <td>Rs {item.food.price}</td>
                                <td>{item.food.calories}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No items added yet.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={() => navigate('/')} className="btn btn-secondary mt-4">
                Back to Home
            </button>
            <button className="btn btn-secondary mt-4">
                Place order
            </button>
            <button onClick={handleClearCart} className="btn btn-danger mt-4">
                <i className="bi bi-trash"></i> Clear Cart
            </button>
        </div>
    );
};

export default Additems;
