import React, { useState } from "react";
import heroImg from "../../assets/img/hero-img.png";
import axios from 'axios';
import './HeroSection.css'; // Import your custom CSS file

const HeroSection = () => {

  return (
    <section id="hero" className="hero section light-background">
      <div className="container">
        <div className="row gy-4 justify-content-center justify-content-lg-between">
          <div className="col-lg-7 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up" className="hero-title">
              Enjoy Your Healthy
              <br />
              Delicious Food
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="hero-description">
              Discover a variety of healthy and delicious options to satisfy
              your cravings.
            </p>
          </div>
          <div className="col-lg-5 hero-img" data-aos="zoom-out">
            <img
              src={heroImg}
              className="img-fluid animated"
              alt="Delicious Food"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
