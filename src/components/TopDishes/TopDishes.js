import React from 'react';
import { Link } from 'react-router-dom';
import './TopDishes.css';

import dish1 from '../../Assets/gulab-jamun.jpg';
import dish2 from '../../Assets/pureveg.png';
import dish3 from '../../Assets/pasta.jpg';
import dish4 from '../../Assets/desserts.jpg';
import dish5 from '../../Assets/cakes.jpg';
import dish6 from '../../Assets/gulab-jamun.jpg';
import dish7 from '../../Assets/pureveg.png';
import dish8 from '../../Assets/pasta.jpg';

const TopDishes = () => {
    const dishes = [
        { src: dish1, name: 'Dish 1', calories: '500 kcal', review: '★★★★☆', price: '120Rs' },
        { src: dish2, name: 'Dish 2', calories: '600 kcal', review: '★★★★★', price: '$12.99' },
        { src: dish3, name: 'Dish 3', calories: '450 kcal', review: '★★★☆☆', price: '$9.99' },
        { src: dish4, name: 'Dish 4', calories: '450 kcal', review: '★★★☆☆', price: '$9.99' },
        { src: dish5, name: 'Dish 5', calories: '450 kcal', review: '★★★☆☆', price: '$9.99' },
        { src: dish6, name: 'Dish 6', calories: '500 kcal', review: '★★★★☆', price: '120Rs' },
        { src: dish7, name: 'Dish 7', calories: '600 kcal', review: '★★★★★', price: '$12.99' },
        { src: dish8, name: 'Dish 8', calories: '450 kcal', review: '★★★☆☆', price: '$9.99' },
    ];

    return (
        <div className="home-page">
            <div className="top-dishes">
                <h3>Top Dishes</h3>
                <hr className="separator" />
                <div className="dishes-container">
                    {dishes.map((dish, index) => (
                        <div key={index} className="dish-item">
                            <img src={dish.src} alt={dish.name} className="dish-image" />
                            <div className="dish-info">
                                <h4>{dish.name}</h4>
                                <p>Calories: {dish.calories}</p>
                                <p>Review: {dish.review}</p>
                                <p>Price: {dish.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="separator" />

            <div className="about-us-section">
                <h2>About Us</h2>
                <p>
                    Welcome to our food service! We are dedicated to bringing you the best and most delicious meals
                    right at your workplace. Our team is passionate about food and we take pride in serving a variety
                    of dishes that cater to everyone's taste. Whether you are in the mood for something savory or sweet,
                    we have got you covered. Thank you for choosing us and enjoy your meal!
                </p>
            </div>

            <div className="contact-us-section">
                <h2>Contact Us</h2>
                <p>
                    We would love to hear from you! If you have any questions, feedback, or concerns, please reach out to us.
                </p>
                <button onClick={() => window.location.href = '/contact'}>Contact Us</button>
            </div>


        </div>
    );
};

export default TopDishes;
