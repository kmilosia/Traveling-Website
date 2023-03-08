import React from 'react';
import './footer.css';
import {FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube} from 'react-icons/fa';

function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="top">
                <h3>BEACHES.</h3>
                <div className="social">
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaInstagram className='icon' />
                    <FaPinterest className='icon' />
                    <FaYoutube className='icon' />
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <ul>
                        <li>About</li>
                        <li>Partnerships</li>
                        <li>Careers</li>
                        <li>News</li>
                        <li>Advertising</li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li>Contact</li>
                        <li>Terms</li>
                        <li>Policy</li>
                        <li>Privacy</li>
                        <li>Pricing</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
