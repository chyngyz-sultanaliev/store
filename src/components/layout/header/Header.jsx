import React from "react";
import img from "../../../assets/images/logos.svg";
import { IoSearch } from "react-icons/io5";
import "./Header.scss";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header--logo">
            <img src={img} alt="" />
          </div>
          <div className="header--nav">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/man"}>Men</NavLink>
            <NavLink to={"/woman"}>Women</NavLink>
            <NavLink to={"/kids"}>Kids</NavLink>
            <NavLink to={"/sale"}>Sale</NavLink>
          </div>
          <div className="header--cart">
            <Link to={"/search"}>
              <IoSearch />
            </Link>
            <Link to={"/basket"}>
              <MdOutlineShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
