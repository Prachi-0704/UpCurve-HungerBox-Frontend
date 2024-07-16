import React, { useState } from 'react';
import leftArrow from '../../Assets/left-arrow-outline.png';
import rightArrow from '../../Assets/right-arrows.png';
import salad from '../../Assets/salad.jpg';
import rolls from '../../Assets/rolls.png';
import desserts from '../../Assets/desserts.jpg';
import sandwich from '../../Assets/sandwitch.jpg';
import cake from '../../Assets/cakes.jpg';
import pureVeg from '../../Assets/pureveg.png';
import pasta from '../../Assets/pasta.png';
import noodles from '../../Assets/noodles.png';
import './Menu.css'; // Ensure you have this CSS file for styling

const Menu = () => {
    const menuItems1 = [
        { src: salad, alt: 'Salad', label: 'Salad' },
        { src: rolls, alt: 'Rolls', label: 'Rolls' },
        { src: desserts, alt: 'Desserts', label: 'Desserts' },
        { src: sandwich, alt: 'Sandwich', label: 'Sandwich' },
        { src: cake, alt: 'Cake', label: 'Cake' },
        { src: pureVeg, alt: 'Pure Veg', label: 'Pure Veg' },
        { src: pasta, alt: 'Pasta', label: 'Pasta' },
        { src: noodles, alt: 'Noodles', label: 'Noodles' },
    ];

    const menuItems2 = [
        { src: salad, alt: 'Salad 2', label: 'Salad 2' },
        { src: rolls, alt: 'Rolls 2', label: 'Rolls 2' },
        { src: desserts, alt: 'Desserts 2', label: 'Desserts 2' },
        { src: sandwich, alt: 'Sandwich 2', label: 'Sandwich 2' },
        { src: cake, alt: 'Cake 2', label: 'Cake 2' },
        { src: pureVeg, alt: 'Pure Veg 2', label: 'Pure Veg 2' },
        { src: pasta, alt: 'Pasta 2', label: 'Pasta 2' },
        { src: noodles, alt: 'Noodles 2', label: 'Noodles 2' },
    ];

    const [currentItems, setCurrentItems] = useState(menuItems1);

    const showNextItems = () => {
        setCurrentItems(currentItems === menuItems1 ? menuItems2 : menuItems1);
    };

    const showPreviousItems = () => {
        setCurrentItems(currentItems === menuItems1 ? menuItems2 : menuItems1);
    };

    return (
        <div className="menu" style={{ marginTop: '15%', paddingTop: '0px' }}>
            <h2>Explore our menu</h2>
            <div className="menu-container">
                <img
                    src={leftArrow}
                    alt="Previous"
                    className="nav-button"
                    onClick={showPreviousItems}
                />
                <div className="menu-items">
                    {currentItems.map((item, index) => (
                        <div key={index} className="menu-item">
                            <img src={item.src} alt={item.alt} className="menu-item-image" />
                            <h5>{item.label}</h5>
                        </div>
                    ))}
                </div>
                <img
                    src={rightArrow}
                    alt="Next"
                    className="nav-button"
                    onClick={showNextItems}
                />
            </div>
        </div>
    );
};

export default Menu;
