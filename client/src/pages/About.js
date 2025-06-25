import React from "react";
// import Layout from "../components/Layout/Layout";
import "../styles/about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side: Image */}
            <div className="col-md-6">
              <div className="about-img">
                <img src="/images/about.jpeg" alt="About Us Image" />
              </div>
            </div>
            {/* Right Side: Heading and Text */}
            <div className="col-md-6">
              <div className="about-content">
                <h1>About Us</h1>
                <p>
                  Welcome to Zaiko Industry, a leading manufacturer dedicated to
                  producing high-quality sportswear, casual wear, active wear,
                  gloves, sports helmets, and accessories. At Zaiko Industry, we
                  pride ourselves on our commitment to excellence, ensuring that
                  each product we create meets the highest standards of quality
                  and durability. Our extensive range of products is designed to
                  cater to athletes, fitness enthusiasts, and casual wearers
                  alike.
                </p>
                {/* Buttons */}
                <Link to="/contact" className="btn btn-primary btn-custom">
                  Contact Us
                </Link>
                <Link to="/about" className="btn btn-secondary btn-custom">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
