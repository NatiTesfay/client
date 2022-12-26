import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const Navbar = () => {
  return (
    <nav className="bg-white shadow lg md-3">
      <Link to="/" className="links">
        Home
      </Link>
      <Link to="/Products" className="links">
        Products
      </Link>
      <Link to="/Orders" className="links">
        Orders
      </Link>
      <Link to="/Contact" className="links">
        Content
      </Link>
    </nav>
  );
};

export default Navbar;
