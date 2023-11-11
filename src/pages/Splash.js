import React from "react";
import Logo from '../assets/pizzaLogo.png'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Splash.css'

const Splash = () => {

  useEffect(() => {
    document.title = "Welcome To Tasty Pizzeria";

    return () => {
      document.title = "Pizza Website";
    };
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/home");
    }, 3000); 

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="splash">
      <img src={Logo} alt="" />
      <h1>TASTY PIZZERIA</h1>
      <p>We serve the best pizzas in town</p>
    </div>
  );
};

export default Splash