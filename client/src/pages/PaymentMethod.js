import React from "react";
import Layout from "../components/Layout/Layout";

const PaymentMethod = () => {
  const sectionStyle = {
    margin: "20px 0",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    marginBottom: "10px",
    lineHeight: "1.8",
  };

  const listStyle = {
    marginBottom: "15px",
    lineHeight: "1.8",
  };

  const containerStyle = {
    padding: "20px",
  };

  return (
    <Layout title={"Payment Method"}>
    <div style={containerStyle}>
      <h1 style={headingStyle} className="text-center">Payment Method</h1>
      <div className="row">
        <div className="" style={sectionStyle}>
          <p style={paragraphStyle}>
            We currently have two methods for payment:
          </p>
          <ul style={listStyle}>
            <li>Pay Cash on Delivery (COD)</li>
            <li>Pay Direct Debit like Bank Transfer - EasyPaisa/JazzCash/OmniCash</li>
          </ul>
          <p style={paragraphStyle}>
            Usually cash on delivery (COD) is preferred but people also avail pre-payment services for gifting purposes. Pre-payment has 10% additional discount on total bill as well.
          </p>
        </div>

        <div className="" style={sectionStyle}>
          <h3 style={headingStyle}>Cash On Delivery (COD)</h3>
          <p style={paragraphStyle}>
            Cash on delivery (COD) is used by several merchants all over Pakistan. It allows customers to pay on delivery, meaning they pay to the courier person when the item is being delivered to their houses.
          </p>

          <h3 style={headingStyle}>Direct Debit/Bank Transfer (10% Additional Discount)</h3>
          <p style={paragraphStyle}>
            Pre-payment can be made through your Bank, EasyPaisa, or JazzCash account to our bank account. In pre-payment/bank transfer, customers have to pay after placing the order. As soon as we receive the payment, we dispatch the order. (How to pay is mentioned on the payment method page).
          </p>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default PaymentMethod;
