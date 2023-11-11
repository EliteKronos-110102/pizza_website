import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import '../styles/Navbar.css';
import Logo from '../assets/pizzaLogo.png';

const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavBar = () => {
        setOpenLinks(!openLinks)
    }

    return (
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <Link to="/home">
            <div className="logo">
              Tasty Pizzeria
              <img src={Logo} alt="" />
            </div>
          </Link>
          <div className="hiddenLinks">
            <Link to="/home">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/home">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={toggleNavBar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    );
}

export default Navbar;
