import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Excellent Education for a great world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          voluptate architecto tempore sequi nesciunt, quo tenetur? Quaerat ex
          odit magni iure dolorem.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
