import React from "react";
import img1 from "../../../assets/images/produtc1.png";
import img2 from "../../../assets/images/produtc2.png";
import img3 from "../../../assets/images/produtc3.png";
import "./Main.scss";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div id="main">
      <div className="container">
        <div className="main">
          <div className="main--left">
            <h2>CHOOSE COLOR : </h2>
            <div className="main--left__imgs">
              <div className="main--left__imgs--img1">
                <img src={img1} alt="" />
              </div>
              <div className="main--left__imgs--img2">
                <img src={img2} alt="" />
              </div>
              <div className="main--left__imgs--img3">
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
          <div className="main--center">
            <Link to={"/products"}>
            <button className="main--center__left">ALL PRODUCTS</button>
            </Link>
            <Link to={"/admin"} >
            <button className="main--center__right">
              ADMIN</button>
            </Link>
          </div>
          <div className="main--right">
            <h1>INSPIRATION</h1>
            <p>
              Inspired by the design of the latest Air Jordan game shoe, <br />{" "}
              the Jordan Jumpman 2021 helps up-and-coming players <br /> level
              up their game.{" "}
            </p>
          </div>
          <div className="main--position">
            <div className="main--position__block">
              <h1>134$</h1>
              <div className="main--position__block--btn">
                <button>exclusive</button>
                <p>
                  <span>JORDAN</span> <br /> JUMPMAN 2021 PF
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
