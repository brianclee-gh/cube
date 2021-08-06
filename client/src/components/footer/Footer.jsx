import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <button className="home">HOME</button>
        <button className="about-us">ABOUT US</button>
        <button className="services">SERVICES</button>
        <button className="join-us">JOIN US</button>
        <button className="contact-us">CONTACT US</button>
      </div>
      <span className="ending">2021 - DOM & FITCH</span>
    </div>
  );
}

export default Footer;
