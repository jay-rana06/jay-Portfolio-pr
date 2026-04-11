import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="team">
              <h2>
                Cric <span>Era...</span>
              </h2>
              <p>
                the Indian men's cricket team is a dominant force, ranked 1st in
                both ODI and T20I formats
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="team">
              <h3>Careers</h3>
              <h4>Blog</h4>
              <h4>Press</h4>
              <h4>Partnership</h4>
              <h4>Help center</h4>
            </div>
          </div>
          <div className="col-4">
            <div className="team">
              <h3>Resources</h3>
              <h4>Events</h4>
              <h4>Community</h4>
              <h4>Social media</h4>
              <h4>News paper</h4>
            </div>
          </div>
          <div className="col-4">
            <div className="team">
              <div className="follow">
                <h3>Subscribe</h3>
                <h1>Join our community to receive updates</h1>
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="col-6">
            <h1 className="social">Social media</h1>
          </div>
          <div className="col-6">
            <div className="icon">
              <a href="javascript:void(0)">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="javascript:void(0)">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="javascript:void(0)">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
          <hr className="hr1" />
          <div className="col-6">
            <div className="policy">
              <div className="d-flex">
                <h5>Privacy policy</h5>
                <h5>Terms of service</h5>
                <h5>Cookie policy</h5>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="rights">
                <h5>@2026 mingers.All rights ressrved</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
