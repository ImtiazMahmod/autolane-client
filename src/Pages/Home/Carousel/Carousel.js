import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../images/carousel/carousel-1.jpg'
import carousel2 from '../../../images/carousel/carousel-2.jpg'
import carousel3 from '../../../images/carousel/carousel-3.jpg'
const BannerCarousel = () => {
  return (
      <>
        <Carousel className="banner">
        <Carousel.Item>
          <img
            className="w-100 d-block"
            src={carousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>We Value Your Car</h3>
            <p>All Makes and Models Auto Repair</p>
            <button type="button" className="btn btn-danger">About Us</button>
            <button type="button" className="btn btn-outline-light ms-3">Contact Us</button>
                </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>The Best in Tour!</h3>
                    <p>Autolane Repair Shop since 2000</p>
                    <button type="button" className="btn btn-danger">Contact Us</button>
            <button type="button" className="btn btn-outline-light ms-3">About More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>True Car in Autocare</h3>
                    <p>Car Reapair Serivices for Affordable Prices</p>
                    <button type="button" className="btn btn-danger">Our Services</button>
            <button type="button" className="btn btn-outline-light ms-3">Get in Touch</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    );
};

export default BannerCarousel;