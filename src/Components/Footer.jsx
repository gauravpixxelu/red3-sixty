import React from 'react';

import Logo from '../assets/images/logo.svg';
import Help_Center from '../assets/icons/help-center.png';
import Business from '../assets/icons/business.png';
import Facebook from '../assets/icons/facebook.png';
import Twitter from '../assets/icons/twitter.png';
import Youtube from '../assets/icons/youtube.png';
import Linkedin from '../assets/icons/linkedin.png';
import Slideshare from '../assets/icons/slideshare.png';
import { NavLink } from "react-router-dom";

function Footer() {

  
  return (
    <footer class="site-footer">
      <div class="container">
        <div className="top-footer">
          <div class="row">
            <div className="col-md-3">
              <div className="footer-content">
                <NavLink class="footer-logo" to="/"><img src={Logo} alt="Logo" /></NavLink>
                <p>RED3SIXTY has developed business growth platforms aimed at helping you run diagnostics and determine where your customer needs to focus in order to grow their business. </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-links">
                <h4>Resources</h4>
                <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/benefits">Benefits</NavLink></li>
                  <li><NavLink to="/pricing">Pricing</NavLink></li>
                  <li><NavLink to="/book-online">Book Online</NavLink></li>
                  <li><NavLink to="/downloads">Downloads</NavLink></li>
                  <li><NavLink to="/blogs">Blog</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-links">
                <h4>Features</h4>
                <ul>
                  <li><NavLink to="/overview">Overview</NavLink></li>
                  <li><NavLink to="/tools">Tools</NavLink></li>
                  <li><NavLink to="/sme-benefits">SME Benefits</NavLink></li>
                  <li><NavLink to="/ultimate-user-guide">Ultimate User Guide</NavLink></li>
                </ul>
              </div>
              <div className="parallel-websites">
                <ul>
                  <li><img src={Help_Center} alt="Help_Center" /><NavLink to="https://help.red3-sixty.com" target="_blank">Help Center</NavLink></li>
                  <li><img src={Business} alt="Business" /><NavLink to="https://business.red3-sixty.com" target="_blank">Business Owner</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-links">
                <h4>Contact Us</h4>
                <ul>
                  <li><b>Address: </b><NavLink to="#">Africa, Portugal</NavLink></li>
                  <li><b>Phone: </b><NavLink to="tel:0110282854">0110282854</NavLink></li>
                  <li><b>Email: </b><NavLink to="mailto:estelanie@red3-sixty.com">estelanie@red3-sixty.com</NavLink></li>
                </ul>
              </div>
              <div className="footer-links social">
                <h4>Connect with us</h4>
                <ul>
                  <li><NavLink to="https://www.facebook.com/RED3SIXTY" target="_blank"><img src={Facebook} alt="Facebook" /></NavLink></li>
                  <li><NavLink to="https://twitter.com/RED3_60" target="_blank"><img src={Twitter} alt="Twitter" /></NavLink></li>
                  <li><NavLink to="https://www.youtube.com/channel/UCXjYQMq_OPXCzNW-uOSUyUQ" target="_blank"><img src={Youtube} alt="Youtube" /></NavLink></li>
                  <li><NavLink to="https://www.linkedin.com/company/86631025" target="_blank"><img src={Linkedin} alt="Linkedin" /></NavLink></li>
                  <li><NavLink to="https://www.slideshare.net/steve511660/edit_my_uploads" target="_blank"><img src={Slideshare} alt="Slideshare" /></NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-bar">
          <p>2023 RED3SIXTY. All rights reserved. Design and Develop by <NavLink to="https://pixxelu.com" target="_blank">PIXXELU</NavLink></p>
        </div>
      </div>


      {/* <div class="exit-op">
        <div class="gd-box">
          <h2>Free For Life</h2>
          <ul>
            <li>Everything you need to start with.</li>
            <li>Access to exclusive diagnostic platform.</li>
            <li>Unlimited report generation.</li>
            <li>No credit card no payments, ever!</li>
            <li>Includes online training.</li>
          </ul>
          <b>Upgrade anytime!</b>
          <p>Proof of concept. Use unlimited report generation. Only limited to 10 customers at any one time and no access to customer development modules</p>
          <NavLink to="https://red-project.com/pages/sign-up?user_type=Consultant&subscricriptionPlan=3679d024-f6be-11ec-895e-068428e27ad2" class="custom-btn"><span>Sign Up</span></NavLink>
          <button class="close">✕</button>
        </div>
  </div> */}


    </footer>

  )
}


export default Footer