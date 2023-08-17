import React from 'react';
import './RestaurantInfo.css';
import { Col, Container, Row } from 'reactstrap';
import PropTypes from 'prop-types'; // استيراد مكتبة PropTypes
import heroImg from'./hero-img.png'

function RestaurantInfo({ title, subtitle, description, buttonText }) {
  return (
   
    <Container>
      <Row  className='hero d-flex align-items-center'>
        <Col lg="6" md="6">
          <div className="hero__content  ">
            <h5 className="mb-3">{subtitle}</h5>
            <h1 className="mb-4 hero__title">
              <span>{title}</span>
            </h1>

            <p>
              {description}
            </p>

            <button className="order__btn d-flex align-items-center justify-content-between">
              {buttonText} <i className="ri-arrow-right-s-line"></i>
            </button>

           
          </div>
        </Col>

        <Col lg="6" md="6">
          <div className="hero__img">
            <img src={heroImg} alt="hero-img" className="w-100" />
          </div>
        </Col>
      </Row>
    </Container>
 
  
  );
}

// تعريف أنواع البروبس باستخدام PropTypes
RestaurantInfo.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default RestaurantInfo;
