import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {

    return (
        <div className="newletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-tex"> Sign up for lattest updates</span>
                <div className="form">
                    <input type="text" placeholder="Email address" />
                    <button>Subscribe</button>
                </div>
                <div className="text">will be use in accordance with our policy</div>
                <div className="social-icons">
                    <div className="icon">
                        <FaFacebookF size={14}/>
                    </div>
                    <div className="icon">
                        <FaTwitter size={14}/>
                    </div>
                    <div className="icon">
                        <FaInstagram size={14}/>
                    </div>
                    <div className="icon">
                        <FaLinkedinIn size={14}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Newsletter;
