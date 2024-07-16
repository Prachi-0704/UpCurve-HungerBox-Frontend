import React from 'react';
import './Header.css';
import headerImage from '../../Assets/header_img.png'; // Adjust the path according to your directory structure

const Header = () => {
    return (
        <div className="header" style={{ backgroundImage: `url(${headerImage})` }}>
            <div className="header-contents">
                <h3>Order your favourite food</h3>
                <p>Hunger is your body’s way of asking for a moment of care. Feed it well, and let every bite bring you comfort and satisfaction.</p>
                <button>View Menu</button>
            </div>
        </div>
    );
};

export default Header;
