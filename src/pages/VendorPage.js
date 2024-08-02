// - - - - - - - - - - - - - - - -   V E N D O R   P A G E   ( F O R   V E N D O R S   O N L Y )   - - - - - - - 


import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './VendorPage.css'; // Import the CSS file
import menuItem1 from '../assets/img/menu/Pizza.png';
import menuItem2 from '../assets/img/menu/pizza1.jpg';
import menuItem3 from '../assets/img/menu/pizza2.png';
import menuItem4 from '../assets/img/menu/pizz3.jpg';

const VendorSection = () => {
  const [username, setUsername] = useState('John Doe'); // Add your logic to set username

  const navigate = useNavigate();

  const [dishes, setDishes] = useState([
    {
      id: 1,
      imgSrc: menuItem1,
      name: 'Magnam Tiste',
      description: 'Delicious and spicy dish',
      price: '5.95',
      calories: '300',
      quantity: 1,
      category: 'veg',
      vendor: 'Pizza',
    },
    {
      id: 2,
      imgSrc: menuItem2,
      name: 'Aut Luia',
      description: 'Rich and creamy delight',
      price: '14.95',
      calories: '500',
      quantity: 1,
      category: 'nonveg',
      vendor: 'Pizza',
    },
    {
      id: 3,
      imgSrc: menuItem3,
      name: 'Magnam Tiste',
      description: 'Delicious and spicy dish',
      price: '595',
      calories: '300',
      quantity: 1,
      category: 'veg',
      vendor: 'Burger',
    },
    {
      id: 4,
      imgSrc: menuItem4,
      name: 'Aut Luia',
      description: 'Rich and creamy delight',
      price: '455',
      calories: '500',
      quantity: 1,
      category: 'nonveg',
      vendor: 'Burger',
    },
  ]);

  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      dishName: 'Magnam Tiste',
      quantity: 2,
      totalPrice: '190',
      status: 'Pending',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      dishName: 'Aut Luia',
      quantity: 1,
      totalPrice: '1495',
      status: 'Completed',
    },
    {
      id: 3,
      customerName: 'Alice Johnson',
      dishName: 'Magnam Tiste',
      quantity: 3,
      totalPrice: '137',
      status: 'Pending',
    },
  ]);

  const handleLogout = () => {
    // Add functionality to handle logout (e.g., clear session, redirect)
    alert('Logout functionality');
    navigate("/");
  };

  const handleAddNewItem = () => {
    // Add functionality to handle adding a new item (e.g., open a modal or form)
    alert('Add new item functionality');
  };

  return (
    <>
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
            <h1 className="sitename">HungerBox</h1>
            <span>.</span>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">Orders</a>
              </li>
              <li>
                <a href="#vendor">Menu</a>
              </li>
              <li>
                <a href="#menu">Add Items</a>
              </li>
              <li>
                <a href="">Update/Delete Food</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <button
            type="button"
            className="btn btn-getstarted"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      <div className="username-display">
        <p>Welcome, {username}!</p>
      </div>

      <section id="orders" className="orders">
        <div className="container">
          <h2>Orders</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer Name</th>
                <th>Dish Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.dishName}</td>
                  <td>{order.quantity}</td>
                  <td>Rs.{order.totalPrice}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="menu" className="menu">
        <div className="container">
          <h2>Menu</h2>
          <div className="row">
            {dishes.map((dish, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <img src={dish.imgSrc} className="card-img-top" alt={dish.name} />
                  <div className="card-body">
                    <h5 className="card-title">{dish.name}</h5>
                    <p className="card-text">{dish.description}</p>
                    <p className="card-text">
                      <strong>Price: ${dish.price}</strong>
                    </p>
                    <p className="card-text">Calories: {dish.calories}</p>
                    <p className="card-text">Category: {dish.category}</p>
                    <p className="card-text">Vendor: {dish.vendor}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card add-new-card" onClick={handleAddNewItem}>
                <div className="card-body d-flex justify-content-center align-items-center">
                  <span className="add-new-icon">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorSection;
