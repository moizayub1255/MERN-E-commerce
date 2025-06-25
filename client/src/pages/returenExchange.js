import React from "react";
import Layout from "../components/Layout/Layout";

const ReturnExchange = () => {
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
    <Layout title={"Return and Exchange"}>
    <div style={containerStyle}>
      <h1 style={headingStyle} className="text-center">Return & Exchange</h1>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>7 Days Checking And Replacement Policy</h3>
        <p style={listStyle}>
          At Discounters.pk, we try to make sure that our customers get the
          products ordered by them in top condition without any defects. So you
          can enjoy complete satisfaction along with the impeccable level of
          service. That’s why we believe you have every right to have your
          product checked, and, if needed, replaced.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>We Believe in Happy Relationships with Our Customers</h3>
        <p style={listStyle}>
          If any problem occurs, please notify us within 7 days of purchase for
          electronic items & 14 days for other items. However, if the product is
          physically damaged or broken upon delivery, you should immediately
          notify us within 24 hours by WhatsApp at 0310-3339585 so that we can
          take action immediately.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>Things You Should Know Before Claiming Returns</h3>
        <ul style={listStyle}>
          <li>Customers have to send the item back to our warehouse after the acknowledgment of our customer service.</li>
          <li>Customers must send the item via traceable delivery (courier or registered post) at their own expense to our address.</li>
        </ul>
        <h4 style={headingStyle}>Replacement Policy is Valid for:</h4>
        <ul style={listStyle}>
          <li>Receiving the wrong product.</li>
          <li>If the delivered product has some defect or issue.</li>
        </ul>
        <h4 style={headingStyle}>To Successfully Replace Your Product:</h4>
        <ul style={listStyle}>
          <li>Notify us within the time limit.</li>
          <li>The product should be undamaged, unused, and in the condition in which it was received.</li>
          <li>The parcel must contain its original product packaging, manufacturer’s containers, documentation, warranty cards, manuals, and all accessories that came with the product.</li>
          <li>
            None of the items mentioned above, including the product itself, should be defaced or marked in any way.
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>A Few More Things to Keep in Mind</h3>
        <p style={listStyle}>
          We offer a 14-day checking warranty on products that do not have a company warranty. However, for products with a company warranty, the 14-day checking warranty from Discounters.pk does not apply. Replacement can take up to 3-5 days after inspection by the Discounters.pk team.
        </p>
      </div>
    </div>
    </Layout>
  );
};

export default ReturnExchange;
