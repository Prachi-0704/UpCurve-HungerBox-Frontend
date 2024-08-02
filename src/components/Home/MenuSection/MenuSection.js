
// <<<<< ------------- FoodController + CartController Integration + Search API -------------------->>>>>



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import "./MenuSection.css";

// Import images
import menuItem1 from "../../../assets/img/menu/Pizza.png";
import menuItem2 from "../../../assets/img/menu/pizza1.jpg";
import menuItem3 from "../../../assets/img/menu/pizza2.png";
import menuItem4 from "../../../assets/img/menu/pizz3.jpg";

const defaultMenuItems = [
  {
    id: 1,
    images: [menuItem1],
    foodName: "Magnam Tiste",
    description: "Delicious and spicy dish",
    price: "5.95",
    calories: "300",
    quantity: 1,
    category: "veg",
    vendor: "Pizza",
  },
  {
    id: 2,
    images: [menuItem2],
    foodName: "Aut Luia",
    description: "Rich and creamy delight",
    price: "14.95",
    calories: "500",
    quantity: 1,
    category: "nonveg",
    vendor: "Pizza",
  },
  {
    id: 3,
    images: [menuItem3],
    foodName: "Magnam Tiste",
    description: "Delicious and spicy dish",
    price: "5.95",
    calories: "300",
    quantity: 1,
    category: "veg",
    vendor: "Burger",
  },
  {
    id: 4,
    images: [menuItem4],
    foodName: "Aut Luia",
    description: "Rich and creamy delight",
    price: "14.95",
    calories: "500",
    quantity: 1,
    category: "nonveg",
    vendor: "Burger",
  },
];

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const singleItemSettings = {
  breakpoint : 480,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const MenuSection = ({
  selectedVendor,
  onAddItem,
}) => {
  const [menuItems, setMenuItems] = useState(defaultMenuItems);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [quantity, setQuantity] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchKeyword) {
      handleSearchClick();
    } else {
      fetchMenuItems();
    }
  }, [selectedVendor, selectedCategory, searchKeyword]);

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearchClick = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(
        `http://localhost:8081/api/food/search`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          params: {
            keyword: searchKeyword,
          },
        }
      );
      setSearchResults(response.data);
      setMenuItems(response.data); // Update menuItems directly from search results
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const fetchMenuItems = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `http://localhost:8081/api/food/vendor/${selectedVendor.vendorId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          params: {
            veg: selectedCategory === "veg",
            nonVeg: selectedCategory === "nonveg",
          },
        }
      );
      setMenuItems(response.data);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchKeyword(""); // Clear search keyword when changing category
  };

  const handleQuantityChange = (id, value) => {
    setQuantity((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddToCart = async (item) => {
    const token = localStorage.getItem("token");
    const updatedItem = { ...item, quantity: quantity[item.foodId] || 1 };
    try {
      const response = await axios.put(
        "http://localhost:8081/api/cart/add",
        {
          foodId: item.foodId,
          quantity: updatedItem.quantity,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!cartItems.some((cartItem) => cartItem.foodId === item.foodId)) {
        setCartItems((prevCartItems) => [...prevCartItems, updatedItem]);
        onAddItem(updatedItem);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <section id="menu" className="menu section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Menu</h2>
        <p>
          <span>Check Our</span>{" "}
          <span className="description-title">Yummy Menu</span>
        </p>

        <div
          className="input-group search-bar"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={searchKeyword}
            onChange={handleSearchChange}
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>

      <div className="container">
        <div className="category-filters">
          <button
            className={`filter-btn ${
              selectedCategory === "all" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${
              selectedCategory === "veg" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("veg")}
          >
            Veg
          </button>
          <button
            className={`filter-btn ${
              selectedCategory === "nonveg" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("nonveg")}
          >
            Non-Veg
          </button>
        </div>

        <Slider {...(menuItems.length === 1 ? singleItemSettings : defaultSettings)}>
          {menuItems.map((item) => (
            <div className="menu-item" key={item.foodId}>
              <a href={`/item/${item.foodId}`} className="glightbox">
                <img
                  src={item.images ? item.images[0] : ""}
                  className="menu-img img-fluid"
                  alt={item.foodName}
                />
              </a>
              <div className="menu-details">
                <h4 style={{ fontWeight: "600" }}>{item.foodName}</h4>
                <p className="description">{item.description}</p>
                <p className="price">Price: Rs {item.price}</p>
                <p className="calories">Calories: {item.calories}</p>
                <div className="quantity-container">
                  <p className="quantity-label">Quantity:</p>
                  <input
                    type="number"
                    value={quantity[item.foodId] || 1}
                    min="1"
                    className="quantity-input"
                    onChange={(e) =>
                      handleQuantityChange(item.foodId, e.target.value)
                    }
                  />
                </div>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MenuSection;
