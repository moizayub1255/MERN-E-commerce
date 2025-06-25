import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import "../styles/RealHomePage.css";
import About from "./About";
import Loader from "../components/Layout/Loader";

const RealHomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/product/get-product`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to fetch products");
      }
    };

    fetchProducts();
  }, []);

  // Shuffle function
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle the products array and take the first 8 products
  const shuffledProducts = shuffleArray([...products]).slice(0, 8);

  return (
    <Layout title={"Capture Mart"}>
      <Loader/>
      {/* Small Navbar */}
      <div className="mininav">
        <div className="scroll-content">
          <p>Free Delivery All Around the World</p>
          <p>30-Day Return Policy</p>
          <p>24/7 Customer Support</p>
          <p>Free Delivery All Around the World</p>
          <p>30-Day Return Policy</p>
          <p>24/7 Customer Support</p>
        </div>
      </div>

      {/* Carosol */}
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/img1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/img2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/img3.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/img4.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/img5.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Products */}
      <h1 className="d-flex justify-content-center align-items-center mt-4">
        Our Top Selling Products
      </h1>

      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {shuffledProducts.map((p) => (
          <div
            className="card m-2"
            key={p._id}
            style={{ width: "286px", height: "500px" }} // Fixing card size
          >
            <img
              src={`/api/v1/product/product-photo/${p._id}`}
              className="card-img-top"
              alt={p.name}
              style={{
                width: "100%",
                height: "250px", // Reduced image height for more space for content
                objectFit: "cover", // Ensuring the image covers the area
              }}
            />
            <div
              className="card-body d-flex flex-column justify-content-between"
              style={{ height: "100%" }}
            >
              <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "PKR",
                      })}
                    </h5>
                  </div>
              <p className="card-text">{p.description.substring(0, 60)}...</p>
              <div className="mt-auto">
                {" "}
                {/* mt-auto will push buttons to the bottom */}
                <button
                  className="btn btn-info me-2"
                  onClick={() => navigate(`/product/${p.slug}`)}
                >
                  More Details
                </button>
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    setCart([...cart, p]);
                    localStorage.setItem("cart", JSON.stringify([...cart, p]));
                    toast.success("Item Added to cart");
                  }}
                >
                  ADD TO CART
                </button>
                <button
                  className="btn btn-success mt-3 w-100 "
                  onClick={() => {
                    setCart([...cart, p]);
                    localStorage.setItem("cart", JSON.stringify([...cart, p]));
                    navigate("/cart");
                    toast.success("Ready for Check Out");
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Customers Review */}
      {/* <h1 className="d-flex justify-content-center align-items-center mt-4">
        Customers Review
      </h1>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card mx-auto" style={{ width: "300px" }}>
              <img src="./images/p1.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <p>
                    <strong>"Amazing service!"</strong>{" "}
                  </p>
                  The product arrived earlier than expected and in perfect
                  condition. I’m really happy with the quality and will
                  definitely order again.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card mx-auto" style={{ width: "300px" }}>
              <img src="./images/p2.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <p>
                    <strong>"Great shopping experience!"</strong>
                  </p>{" "}
                  The website is easy to navigate, and I found exactly what I
                  was looking for. Shipping was quick, and the customer support
                  was super helpful.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card mx-auto" style={{ width: "300px" }}>
              <img src="./images/p3.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <p>
                    <strong>"Highly recommend!"</strong>{" "}
                  </p>
                  The product quality is top-notch, and the prices are very
                  reasonable. I had a minor issue, but the support team resolved
                  it quickly.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card mx-auto" style={{ width: "300px" }}>
              <img src="./images/p4.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <p>
                    <strong>"Fast delivery and excellent product!"</strong>
                  </p>{" "}
                  I was impressed with the prompt shipping and how well the item
                  was packaged. Will be recommending this site to friends!
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card mx-auto" style={{ width: "300px" }}>
              <img src="./images/p5.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <p>
                    {" "}
                    <strong>"Perfect purchase!"</strong>
                  </p>{" "}
                  The product is exactly as described, and the whole process was
                  seamless from start to finish. I'll be a returning customer
                  for sure.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      <hr></hr>
      <About></About>
      <hr></hr>
      {/* Accordion */}
      <h1 className="d-flex justify-content-center align-items-center mt-4">
        Frequently Asked Questions
      </h1>
      <div className="accordion m-3" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is your return policy?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Answer:</strong> We offer a 30-day return policy. If you
              are not satisfied with your purchase, you can return the item
              within 30 days of receipt for a full refund or exchange, provided
              it is in its original condition.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How long does shipping take?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Answer:</strong> Shipping usually takes 3-5 business days
              within the country. For international orders, it may take 7-14
              business days depending on the destination and customs processing.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Do you offer international shipping?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Answer:</strong> Yes, we ship to most countries around the
              world. Please note that shipping times and rates vary depending on
              the destination.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              How can I track my order?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Answer:</strong> Once your order has been shipped, you
              will receive a confirmation email with a tracking number. You can
              use this number to track your package on our courier’s website.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              What payment methods do you accept?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Answer:</strong> We accept major credit cards, debit
              cards, PayPal, and other secure payment options. You can select
              your preferred payment method during the checkout process.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RealHomePage;
