// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const Addtocart = ({ onAddItem }) => {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     // Example item data (you should fetch this based on the ID)
//     const item = {
//         id: id,
//         name: 'Sample Item',
//         description: 'This is a sample item description.',
//         price: '10.00',
//         calories: '200',
//         imgSrc: '/path/to/image.png'
//     };

//     const handleAddToCart = () => {
//         onAddItem(item);
//         navigate('/added-items'); // Redirect to the added items page
//     };

//     return (
//         <div>
//             <h1>{item.foodName}</h1>
//             <img src={item.images[0]} alt={item.foodName} />
//             <p>{item.description}</p>
//             <p>Price: Rs {item.price}</p>
//             <p>Calories: {item.calories}</p>
//             <button onClick={handleAddToCart}>Add to Cart</button>
//         </div>
//     );
// };

// export default Addtocart;



// - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - - 


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Addtocart = ({ onAddItem }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetchItem();
    }, [id]);

    const fetchItem = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get(`http://localhost:8081/api/food/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            setItem(response.data);
        } catch (error) {
            console.error('Error fetching item:', error);
        }
    };

    const handleAddToCart = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.put('http://localhost:8081/api/cart/add', {
                foodId: item.foodId,
                quantity: 1
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Add to Cart Response:', response.data);
            onAddItem(item);
            // navigate('/added-items'); // Redirect to the added items page
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    if (!item) return <div>Loading...</div>;

    return (
        <div>
            <h1>{item.foodName}</h1>
            <img src={item.images[0]} alt={item.foodName} />
            <p>{item.description}</p>
            <p>Price: Rs {item.price}</p>
            <p>Calories: {item.calories}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Addtocart;
