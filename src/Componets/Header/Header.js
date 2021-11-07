import React from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
import img from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = UseAuth();
  return (
    <div className="header">
      <img className="logo" src={img} alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>

        {user.email ? (
          <>
            <Link to="/orders">Orders</Link>
            <span style={{ color: "white" }}>{user.displayName}</span>
            <button className="btn" onClick={logOut}>
              Log out
            </button>
          </>
        ) : (
          <Link to="/login"> Log in</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
