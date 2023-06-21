import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

import "./Footer.scss";
const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque inventore fugit, vel ratione expedita nisi eligendi atque ipsum eaque dolore?

                    </div>

                </div>
                <div className="col"><div className="title">Contact</div>
                 <div className="c-item">
                 <FaLocationArrow/>
                 <div className="text">
                    H#275,, street 10 ali abad Rawalpindi
                 </div>
                </div>
                <div className="c-item">
                 <FaMobileAlt/>
                 <div className="text">
                    Phone: 0345678910
                 </div>
                </div>
                <div className="c-item">
                 <FaEnvelope/>
                 <div className="text">
                    Emai: m.adilabbasi786@gmail.com
                 </div>
                </div>
                </div>
                <div className="col"><div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speaker</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home theaters</span>
                <span className="text">Projectors</span>
                
                </div>
                <div className="col"><div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms and conditions</span>
                <span className="text">Contact us</span>
                
                </div>
              </div>
             <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        Adil.Store Created by Adil abbasi Premium E-commerce
                    </div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
