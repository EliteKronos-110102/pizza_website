import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';
import '../styles/Home.css'

const Home = () => {

    useEffect(() => {
      document.title = "Home";

      return () => {
        document.title = "Pizza Website";
      };
    }, []);

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Tasty Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button>BROWSE MENU</button>
        </Link>
      </div>
    </div>
  );
}

export default Home