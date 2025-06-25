import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="pvc">
        <div className="pvc-left">
          <img
            className="pvc-img"
            src="/images/privacy.jpg"
            alt="Privacy Policy"
          />
        </div>
        <div className="pvc-right p-4">
          <h1 className="pvc-title">Privacy Policy</h1>
          <p className="pvc-para">
            <section id="privacy-policy">
              <p>
                At Capture Mart, we are committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard
                your personal information when you visit our website or make a
                purchase.
              </p>

              <h3>Information We Collect:</h3>
              <ul>
                <li>
                  <strong>Personal Information:</strong> When you create an
                  account, place an order, or subscribe to our newsletter, we
                  collect personal information such as your name, email address,
                  phone number, and shipping address.
                </li>
                <li>
                  <strong>Payment Information:</strong> We do not store your
                  credit card information. All payment transactions are
                  processed securely through trusted payment gateways.
                </li>
              </ul>

              <h3>Cookies:</h3>
              <p>
                Our website uses cookies to enhance user experience. You can
                choose to accept or decline cookies. Declining cookies may
                prevent you from taking full advantage of the website.
              </p>

              <h3>Changes to This Policy:</h3>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on our
                website.
              </p>

              <p>
                For any questions regarding this Privacy Policy, please contact
                us at{" "}
                <a href="mailto:support@capturemart.com">
                  support@capturemart.com
                </a>
                .
              </p>
            </section>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
