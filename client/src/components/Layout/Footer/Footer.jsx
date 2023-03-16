import React from 'react'
import {NavLink} from "react-router-dom"
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css"
const Footer = () => {
    return (
        <footer id="footer">
          <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playStore} alt="playstore" />
            <img src={appStore} alt="Appstore" />
          </div>
    
          <div className="midFooter">
            <h1>Moon Shop.</h1>
            <p>High Quality is our first priority</p>
    
            <p>Copyrights 2023 &copy; MOON</p>
          </div>
    
          <div className="rightFooter">
            <h4>Follow Us</h4>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/policy">Privacy Policy</NavLink>
        
          </div>
        </footer>
      );
}

export default Footer