import React from "react";
import "./Testimonials.css";
import worldCup from "../assest/2011.webp";
import champion from "../assest/2013 (2).jpg"
import virat from "../assest/2024.avif"

const Testimonials = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <img src={worldCup} alt="" />
              <h2>2011 world cup</h2>
              <p>The 2011 Cricket World Cup final was held on April 2, 2011, at the Wankhede Stadium in Mumbai, where India faced Sri Lanka. India won the match by six wickets, with Gautam Gambhir virat kholi is the best player morre than. </p>
              <button>Read more</button>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src={champion} alt="" />
              <h2>2013 champion  trophy</h2>
              <p>The 2013 ICC Champions Trophy was the seventh edition of the tournament, held in England and Wales from 6 to 23 June 2013. </p>
              <button>Read more</button>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src={virat} alt="" />
              <h2>2024 world cup</h2>
              <p>The final was held on 29 June 2024 at Kensington Oval, Bridgetown, Barbados, between India and South Africa.Virat Kohli played a crucial innings, scoring 76 runs off 59 balls, earning him the Player of the Match.</p>
              <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
