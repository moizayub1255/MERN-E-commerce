import React from "react";
import { Accordion } from "react-bootstrap"; // Ensure you have react-bootstrap installed
import Layout from "../components/Layout/Layout";


const FAQs = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return the items within 30 days of purchase, provided they are in original condition.",
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is dispatched, you will receive an email with tracking information.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we only ship within Pakistan.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Cash on Delivery, EasyPaisa, JazzCash, and Bank Transfers.",
    },
    {
      question: "Can I change or cancel my order?",
      answer: "You can change or cancel your order within 24 hours of placing it. Please contact customer service.",
    },
  ];

  return (
    <Layout title={"FAQ's"}>
    <div className="container mt-4">
      <h1 className="text-center mb-4">Frequently Asked Questions</h1>
      <Accordion>
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
    </Layout>
  );
};

export default FAQs;
