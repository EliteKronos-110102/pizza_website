import React, { useEffect } from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

const About = () => {

  useEffect(() => {
    document.title = "About Us";

    return () => {
      document.title = "Pizza Website";
    };
  }, []);

  return (
    <div className="about">
      <div
        className="aboutLeft"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutRight">
        <h1> ABOUT US</h1>
        <p>
          We are Tasty Pizzeria, founded in 2023.
        </p>
      </div>
    </div>
  );
}

export default About;
