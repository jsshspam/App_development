import React from 'react';
import '../Assets/acss/Privacy.css';
import { Bar } from './Navbar';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Terms = () => {
  return (
    <><Bar/>
    <main className="wrap">
      <section className="containert">
        <div className="container__heading">
          <h2>Terms & Conditions</h2>
        </div>
        <div className="container__content">
        <div>
      <h2>Terms and Conditions for Ninja Cart</h2>
      <p>
        These terms and conditions ("Terms") govern your use of the services provided by Ninja Cart ("we," "us," "our") as a user ("you," "your") of our online delivery platform. By accessing or using our services, you agree to abide by these Terms. Please read these Terms carefully before using our platform.
      </p>

      <h3>1. Account Registration</h3>
      <p>
        1.1. To use our services, you may be required to create an account. You agree to provide accurate and complete information during the registration process.
        <br />
        1.2. You are responsible for maintaining the confidentiality of your account credentials, including your username and password. You agree to notify us immediately of any unauthorized use of your account.
      </p>

      <h3>2. Ordering and Delivery</h3>
      <p>
        2.1. You can place orders for goods and services through our platform. By placing an order, you agree to pay the specified fees associated with your order, including delivery charges and applicable taxes.
        <br />
        2.2. We aim to provide accurate delivery times, but delivery times may vary based on factors beyond our control. We will make reasonable efforts to deliver orders promptly.
        <br />
        2.3. You agree to provide accurate and up-to-date delivery information, including your delivery address and contact details.
      </p>

      <h3>3. Payment</h3>
      <p>
        3.1. Payment for orders must be made through our approved payment methods. You agree to provide valid and authorized payment information.
        <br />
        3.2. We use secure payment processing methods to protect your financial information. However, we are not responsible for any unauthorized transactions or breaches of your payment information.
      </p>

      <h3>4. User Conduct</h3>
      <p>
        4.1. You agree not to use our platform for any unlawful or prohibited purpose, including but not limited to:
        <br />
        Violating any applicable laws or regulations.
        <br />
        Engaging in fraudulent activities.
        <br />
        Transmitting viruses, malware, or harmful content.
        <br />
        Harassing, defaming, or harming others.
        <br />
        4.2. We reserve the right to suspend or terminate your account and access to our services if you violate these Terms or engage in any behavior that is harmful to our platform or other users.
      </p>

      <h3>5. Disclaimers and Limitation of Liability</h3>
      <p>
        5.1. We provide our services "as is" and make no warranties or representations regarding the accuracy, reliability, or availability of our platform.
        <br />
        5.2. We are not liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our services.
      </p>

      <h3>6. Privacy Policy</h3>
      <p>
        6.1. Your use of our platform is also governed by our Privacy Policy. By using our services, you consent to the collection and use of your personal information as described in our Privacy Policy.
      </p>

      <h3>7. Changes to Terms and Services</h3>
      <p>
        7.1. We reserve the right to modify these Terms and our services at any time. Changes will be effective upon posting on our platform.
      </p>

      <h3>8. Contact Information</h3>
      <p>
        If you have any questions, concerns, or requests regarding these Terms, please contact us at [Insert Contact Information].
      </p>
    </div>
          </div>
        <div className="containert__nav">
          <p>By accessing NinjaCart, you acknowledge that you have read and understood these Terms and agree to be bound by them</p>
          <div className="button-29"><NavLink to="/Home">Accept and continue</NavLink></div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
};

export default Terms;