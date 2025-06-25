import React from "react";
import { Link , NavLink} from "react-router-dom";
// import "./Footer.css"
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* Contact Info */}
            <div className="col-md-4">
              <h2>Contact Us</h2>
              <p>
                <i className="bi bi-geo-alt" /> Faisalabad
              </p>
              <p>
                <i className="bi bi-telephone" /> Call us at 0336-6190190
              </p>
              <p>
                <i className="bi bi-envelope" /> Email: moiz401@gmail.com
              </p>
              <div className="social-icons">
                <Link href="#">
                  <i className="bi bi-facebook" />
                </Link>
                <Link href="#">
                  <i className="bi bi-instagram" />
                </Link>
                <Link href="#">
                  <i className="bi bi-tiktok" />
                </Link>
                <Link href="#">
                  <i className="bi bi-youtube" />
                </Link>
              </div>
            </div>
            {/* Information */}
            <div className="col-md-4">
              <h2>Information</h2>
              <ul className="list-unstyled">
                <li className="pb-2">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="pb-2">
                  <Link to="/delivery-information">Delivery Information</Link>
                </li>
                {/* <li>
                  <Link to="/">Sell With Us</Link>
                </li> */}
                <li className="pb-2">
                  <Link to="/policy">Privacy Policy</Link>
                </li>
                <li className="pb-2">
                  <Link to="/contact">Contact</Link>
                </li>
                
              </ul>
            </div>
            {/* Customer Service */}
            <div className="col-md-4">
              <h2>Customer Service</h2>
              <ul className="list-unstyled">
                {/* <li className="pb-2">
                  <Link to="/">WhatsApp Us</Link>
                </li> */}
                <li className="pb-2">
                  <Link to="/return-and-exchange">Return &amp; Exchange</Link>
                </li>
                <li className="pb-2">
                  <Link to="/payment-method">Payment Method</Link>
                </li>
                <li className="pb-2">
                  <Link to="/faqs">FAQ's</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
