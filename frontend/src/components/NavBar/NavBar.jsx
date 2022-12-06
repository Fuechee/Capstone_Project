import React from "react";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import NavItems from "../NavItems/Navitems";
import "./NavBar.css";
import logo from "./logo.png"


const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}> <img className="logo" src={logo} alt="logo" /> </Link>
        </li>
        <NavItems />
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
          <button onClick={() => navigate("/cart")}>Cart</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
