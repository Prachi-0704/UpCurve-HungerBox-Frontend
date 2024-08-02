import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container position-relative d-flex align-items-center justify-content-between">
                <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
                    <h1 className="sitename">HungerBox</h1>
                    <span>.</span>
                </a>

                <nav id="navmenu" className="navmenu d-flex justify-content-center">
                    <ul className="d-flex align-items-center">
                        <li><a href="#hero" className="active">Home</a></li>
                        <li><a href="#vendorHome">Vendor</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <div className="button-group ms-auto">
                    <Link to="/login" className="btn-getstarted">Login</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
