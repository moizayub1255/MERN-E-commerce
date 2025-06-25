import React from "react";
// import Layout from "../components/Layout/Layout";
import "../styles/about.css";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
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
                    Welcome to Zaiko Industry, a leading manufacturer dedicated
                    to producing high-quality sportswear, casual wear, active
                    wear, gloves, sports helmets, and accessories. At Zaiko
                    Industry, we pride ourselves on our commitment to
                    excellence, ensuring that each product we create meets the
                    highest standards of quality and durability. Our extensive
                    range of products is designed to cater to athletes, fitness
                    enthusiasts, and casual wearers alike. Our extensive range
                    of products is designed to cater to athletes, fitness
                    enthusiasts, and casual wearers alike. Whether you’re
                    looking for cutting-edge sports helmets that provide maximum
                    protection, stylish and comfortable casual wear, or
                    performance-enhancing active wear, Zaiko Industry has you
                    covered. We understand the diverse needs of our customers
                    and strive to provide products that not only meet but exceed
                    their expectations. With a focus on innovation and customer
                    satisfaction, we continuously improve our manufacturing
                    processes to deliver products that stand out in the market.
                    Choose Zaiko Industry for unparalleled quality, reliability,
                    and style in every piece. Join us in our mission to elevate
                    the standards of sportswear and accessories worldwide.
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
    </Layout>
  );
};

export default About;
