import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMenuItems } from "../../store/menuSlice";
import { addToCart } from "../../store/cartSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MenuItems.css";
import PurgerImage from './download (1).png'
import PizzaImage from './download.png'
import { Button, Card, CardBody, CardTitle, Col, Row } from 'reactstrap';


function MenuItems() {
  const menuItems = useSelector((state) => state.menuItems);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/menuData.json")
      .then((response) => response.json())
      .then((data) => dispatch(setMenuItems(data)));
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => {
          if (selectedCategory === "pizza") {
            return item.category === "Pizza" || item.name.includes("Pizza");
          } else if (selectedCategory === "burger") {
            return item.category === "Burger" || item.name.includes("Burger");
          }
          return true;
        });

  return (
    <div className="menu-items-container">
      <div className="category-buttons">
        <button
          className={selectedCategory === "all" ? "active" : ""}
          onClick={() => handleCategoryChange("all")}
        >
          All
        </button>
        <button
          className={selectedCategory === "pizza" ? "active" : ""}
          onClick={() => handleCategoryChange("pizza")}
        >
          <img src={PizzaImage} alt="Pizza" className="category-icon" />
          Pizza
        </button>
        <button
          className={selectedCategory === "burger" ? "active" : ""}
          onClick={() => handleCategoryChange("burger")}
        >
          <img src={PurgerImage} alt="Burger" className="category-icon" />
          Burger
        </button>
      </div>
      <div className="menu-container">
      <Row>
          {filteredItems.map((item) => (
            <Col xs={12} sm={6} md={4} lg={4} key={item.id} className="mb-4">
              <div className="menu-item">
                <img src={item.image} alt={item.name} />
                <p className="menu-item-name">{item.name}</p>
                <div className="menu-item-details">
                  <p className="menu-item-price">{item.price} $</p>
                  <button onClick={() => dispatch(addToCart(item))}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      
      </div>
    </div>
  );
}

export default MenuItems;
