import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useDispatch } from "react-redux";
import RestaurantInfo from "./components/ResturentInfo/RestaurantInfo";
import MenuItems from "./components/MenuItems/MenuItems";
import Cart from "./components/Card/Cart";
import Header from "./components/Header/Header";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import TestItems from "./components/Testemonial/Testemonial";
import TestimonialsSection from "./components/Testemonial/Testemonial";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const [showCart, setShowCart] = useState(false);



  return (
    <Router>
      <Header showCart={showCart} setShowCart={setShowCart} />
      <Container fluid className="bg-light">
        <RestaurantInfo
          title="Enjoy Your Healthy Delicious Food"
          subtitle="Easy way to make an order"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!"
          buttonText="Order now"
        />
        <div className="right-section">{showCart && <Cart />}</div>
      </Container>
      <section className="Food-pop">
        <Container>
          <div className="text-center">
            <div className="section-header">
              <h2>Our Menu</h2>
              <p>
                Check Our <span>Yummy Menu</span>
              </p>
            </div>
          </div>

          <MenuItems />
        </Container>
   
      </section>
      <TestimonialsSection />
    </Router>
  );
}

export default App;
