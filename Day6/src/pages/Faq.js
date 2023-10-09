// FAQ.js
import React from 'react';
import '../assets/css/Faq.css';
import { Bar } from './Navbar';
import Footer from './Footer';

const FAQ = () => {
  // Define your FAQ data as an array of objects with questions and answers
  const faqData = [
    {
      question: 'How can I place an order?',
      answer: 'To place an order, follow these steps: 1. Login to your account. 2. Browse our products. 3. Add items to your cart. 4. Proceed to checkout and complete your order.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards, PayPal, and online payment methods. You can choose your preferred payment option during checkout.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Delivery times may vary depending on your location and product availability. Typically, deliveries are made within 2-5 business days.'
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes, you can track your order in the "Order History" section of your account. We provide real-time updates on the status of your delivery.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy. If youre not satisfied with your purchase, you can initiate a return request through your account.'
    },
  ];

  return (
    <>
    <Bar/>
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqData.map((item, index) => (
          <li key={index}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
};

export default FAQ;
