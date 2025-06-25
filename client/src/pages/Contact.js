import React from "react";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="cnt">
        <div className="cnt-left">
          <img src="/images/contact.jpeg" alt="Contactus" />
        </div>
        <div className="cnt-right p-4">
          <h1 className="cnt-title">Contact Us</h1>
          <p className="cnt-para">
            <section id="contact-us">
              <p>
                At Capture Mart, we value your feedback and are here to help!
                Whether you have questions about our products, need assistance
                with your order, or want to share your thoughts, we’d love to
                hear from you.
              </p>

              <h3>Contact Information:</h3>
              <ul>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@capturemart.com">
                    support@capturemart.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> +92 123 456 7890
                </li>
                <li>
                  <strong>Address:</strong> 123 Main Street, Karachi, Pakistan
                </li>
              </ul>

              <h3>Customer Support Hours:</h3>
              <ul>
                <li>Monday to Friday: 9 AM - 6 PM PKT</li>
                <li>Saturday: 10 AM - 4 PM PKT</li>
                <li>Sunday: Closed</li>
              </ul>

              <p>
                Feel free to reach out to us via email or phone, or fill out the
                contact form on our website. We aim to respond to all inquiries
                within 24 hours!
              </p>
            </section>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
