import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/" className="navbar-logo">Kalvium <span className="heart">❤️‍🩹</span></Link>
    </div>
    <div className="navbar-menu">
      <ul className="navbar-nav">
        <NavItem to="/contacts" text="Contacts" />
        <NavItem to="/register" text="Register" className="nav-link-about" />
      </ul>
    </div>
  </nav>
);

const NavItem = ({ to, text, className }) => (
  <li className="nav-item">
    <Link to={to} className={`nav-link ${className || ""}`}>{text}</Link>
  </li>
);

export default Navbar;