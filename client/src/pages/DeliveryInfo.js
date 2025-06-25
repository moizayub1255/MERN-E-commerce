import React from "react";
import Layout from "../components/Layout/Layout";

const DeliveryInfo = () => {
  const sectionStyle = {
    margin: "20px 0",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const listStyle = {
    marginBottom: "15px",
    lineHeight: "1.8",
  };

  const containerStyle = {
    padding: "20px",
  };

  return (
    <Layout title={"Delivery Information"}>
      <div style={containerStyle}>
        <h1 style={headingStyle} className="text-center">Delivery Information</h1>
        <div className="row">
          <div className="" style={sectionStyle}>
            <h3 style={headingStyle}>Delivery Time:</h3>
            <ol style={listStyle}>
              <li>
                After the order has been placed, our (CSR) will call for order
                confirmation and then the order shall be processed.
              </li>
              <li>
                Delivery is done within 48 hours nationwide and within 24 hours
                in Karachi from the confirmation time. You can also self-pickup
                your order from our office at Gulshan-e-Iqbal.
              </li>
              <li>
                You can inquire about the status of your order by WhatsApp (+92)
                -310-3339585.
              </li>
              <li>
                The estimated average delivery time (after the order is
                dispatched) across Pakistan is 1 working day for Karachi and 2
                to 3 working days for other major cities. For remote areas,
                delivery can take longer.
              </li>
              <li>
                You are requested to be available on the provided contact number
                for a timely delivery.
              </li>
            </ol>
          </div>

          <div className="" style={sectionStyle}>
            <h3 style={headingStyle}>Delivery Charges:</h3>
            <ul style={listStyle}>
              <li>
                We offer free delivery for all orders above PKR. 2500/- within
                Pakistan.
              </li>
              <li>
                For orders below PKR. 2500, standard delivery rates PKR. 190/-
                will be charged.
              </li>
            </ul>

            <h3 style={headingStyle}>Track Your Order:</h3>
            <ul style={listStyle}>
              <li>
                Once your order is dispatched, you will receive an email/SMS
                with your tracking number.
              </li>
            </ul>

            <h3 style={headingStyle}>Cancellation Policy:</h3>
            <ol style={listStyle}>
              <li>
                For cancellation of prepaid orders, please contact us within 24
                hours after order placement.
              </li>
              <li>
                For cancellation of cash on delivery orders, please notify our
                team during call confirmation or automated confirmation system
                via SMS, Robo call, or web.
              </li>
              <li>
                Once the order is “in process,” it will take 5-7 working days
                for refund depending on the bank and payment processor used on
                the order.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeliveryInfo;
