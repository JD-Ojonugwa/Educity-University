import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h3>Nurturing Tomorrow's Leaders Today</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          repellendus facere laborum minima, officia quia quae quod doloremque
          voluptatibus magni esse porro cumque dolor ipsa. Quaerat aspernatur
          delectus sequi modi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
          dicta quasi adipisci minima sint explicabo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, minus
          quis. Facere ullam id voluptatibus ipsa. Doloribus numquam, earum sed
          vero debitis enim repellendus accusamus.
        </p>
      </div>
    </div>
  );
};

export default About;
