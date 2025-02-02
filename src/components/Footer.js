import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="main-footer" id="abouts">
        <div className="footer-container">
            <div className="footer-about">
                <h2>About Us</h2>
                <p>Welcome to Our Restaurant, where passion meets flavor. We pride ourselves on serving delicious, high-quality meals made with the freshest ingredients. Our story began with a dream to create a dining experience that’s unforgettable, offering not just food, but a sense of belonging and community.</p>
                <Link to="/about" className="learn-more-btn">Learn More</Link>
            </div>
    
            
            <div className="footer-links">
                <h2>Quick Links</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                </ul>
            </div>
    
            <div className="footer-contact">
                <h2>Contact Us</h2>
                <p><i className="fas fa-map-marker-alt"></i> 123 Food Street, Flavor Town, FT 56789</p>
                <p><i className="fas fa-phone-alt"></i> +123 456 7890</p>
                <p><i className="fas fa-envelope"></i> contact@restaurant.com</p>
                <div className="social-icons">
                    <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="/"><i className="fab fa-twitter"></i></Link>
                    <Link to="/"><i className="fab fa-instagram"></i></Link>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 . All Rights Reserved.</p>
        </div>
    </footer>
  )
}
