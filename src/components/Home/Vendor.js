import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Vendor.css';

import burgerImg from '../../assets/img/Main/Burger1.jpg';
import pizzaImg from '../../assets/img/Main/pizza.jpg';
import gulabJamunImg from '../../assets/img/Main/gulab-jamun.jpg';
import southIndianImg from '../../assets/img/Main/southindian.jpg';
import maharstrianImg from '../../assets/img/Main/Maharstrian.jpg';
import northIndianImg from '../../assets/img/Main/NorthIndian.jpg';
import dessertImg from '../../assets/img/Main/dessert2.jpg';
import idaliImg from '../../assets/img/Main/Idali.png';

const defaultVendors = [
    { vendorId: 1, vendorName: 'Burger', images: [burgerImg] },
    { vendorId: 2, vendorName: 'Pizza', images: [pizzaImg] },
    { vendorId: 3, vendorName: 'Dessert', images: [gulabJamunImg] },
    { vendorId: 4, vendorName: 'South Indian', images: [southIndianImg] },
    { vendorId: 5, vendorName: 'Maharashtrian', images: [maharstrianImg] },
    { vendorId: 6, vendorName: 'North Indian', images: [northIndianImg] },
    { vendorId: 7, vendorName: 'Dessert', images: [dessertImg] },
    { vendorId: 8, vendorName: 'Idali', images: [idaliImg] },
];

const Vendor = ({ selectedVendor, onSelectVendor }) => {
    const [vendors, setVendors] = useState(defaultVendors);
    const navigate = useNavigate();

    useEffect(() => {
        fetchVendors();
    }, []);

    const fetchVendors = async () => {
        const token = localStorage.getItem('token');
        // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjIwNzA0ODEsImV4cCI6MTcyMjE1Njg4MSwiZW1haWxJZCI6ImtlbkB4bXBsLmNvbSIsImF1dGhvcml0aWVzIjoiUk9MRV9WRU5ET1IifQ.ER8Xi-PPSv5JQgK4b4MKrlWocYav8jzIUDD9W-HyK8U';
        if(!token){
            console.error('Token not found');
            return;
        }
        try {
            const response = await axios.get('http://localhost:8081/api/vendors', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            setVendors(response.data);
            console.log(response.data);
            console.log(token);
        } catch (error) {
            console.error('Error fetching vendors:', error);
        }
    };

    const handleVendorClick = (vendor) => {
        if (onSelectVendor) {
            onSelectVendor(vendor); // Update the selected vendor
            navigate('/'); // Redirect to the main page
        }
    };

    return (
        <div className="vendor-container">
            <div className="container section-title" data-aos="fade-up">
                <h2>Our Food Counter</h2>
                <p><span>Check Our</span> <span className="description-title">Food Counter</span></p>
            </div>
            <div className="vendor-list">
                {vendors.map((vendor) => (
                    <div
                        key={vendor.vendorId}
                        className={`vendor-item ${selectedVendor && selectedVendor.vendorId === vendor.vendorId ? 'selected' : ''}`}
                        onClick={() => handleVendorClick(vendor)}
                    >
                        <img src={vendor.images ? vendor.images[0] : ''} alt={vendor.vendorName} />
                        <p>{vendor.vendorName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vendor;
