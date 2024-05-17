import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return ( 
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="title">About Farmart</h1>
        <div className='about-div'>
          <img src="https://images.unsplash.com/photo-1569858241634-5aee6e47091a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Farm Cattles" />
        <p className="description">Welcome to Farmart, your premier online marketplace for buying and selling farm animals directly from sellers in Kenya.</p>
        <p className="description">Founded in [year], Farmart was born out of a passion for agriculture and a desire to revolutionize the way farm animals are bought and sold in Kenya. With our user-friendly platform, we aim to connect farmers, livestock breeders, and buyers, creating a seamless and efficient marketplace for agricultural transactions.</p>
        <h2 className="subtitle">Our Mission</h2>
        <p className="description">At Farmart, our mission is to empower farmers and sellers by providing them with a reliable platform to showcase their livestock and connect with potential buyers. We strive to promote transparency, fairness, and efficiency in agricultural trade, ultimately contributing to the growth and prosperity of the farming community in Kenya.</p>
       </div>
        <h2 className="subtitle">What Sets Us Apart?</h2>
        <ul className="feature-list">
          <li className="feature-item"><strong>Direct from Sellers:</strong> We facilitate direct transactions between buyers and sellers, eliminating middlemen and ensuring fair prices for both parties.</li>
          <li className="feature-item"><strong>Wide Selection:</strong> Whether you're in search of dairy cows, poultry, goats, sheep, or pigs, Farmart offers a diverse selection of high-quality farm animals to meet your needs.</li>
          <li className="feature-item"><strong>Convenience:</strong> Our intuitive platform allows users to browse listings, communicate with sellers, and complete transactions with ease, all from the comfort of their home or farm.</li>
          <li className="feature-item"><strong>Trust & Security:</strong> We prioritize the safety and security of our users' data and transactions. Our platform employs robust security measures to protect against fraud and ensure a secure browsing and shopping experience.</li>
          <li className="feature-item"><strong>Support & Community:</strong> Our dedicated customer support team is committed to assisting users throughout their journey on Farmart. Additionally, we foster a vibrant community of farmers, sellers, and agriculture enthusiasts, where knowledge sharing and collaboration thrive.</li>
        </ul>
        <h2 className="subtitle">Our Vision for the Future</h2>
        <p className="description">Looking ahead, we envision Farmart becoming the go-to destination for all agricultural needs in Kenya. We aspire to expand our offerings to include a wider range of agricultural products and services, further enhancing the accessibility and efficiency of agricultural trade in the region.</p>
      </div>
    </div>
  );
}

export default AboutUs;