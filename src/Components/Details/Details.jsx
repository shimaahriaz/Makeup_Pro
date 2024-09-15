import React from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCounter,
  decrementCounter,
  decrementQuantity,
  increaseCounter,
  incrementCounter,
  incrementQuantity,
} from "../../Redux/Slice/Cart";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import img from "../../images/beautiful-still.jpg";
import imag from "../../images/elegant-skin.jpg";
import "./Details.css";

const Details = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const counter = useSelector((state) => state.cart.cart);
  const [addedToCart, setAddedToCart] = useState(false);
  const [count, setCount] = useState(1);
  const [countQuintity, setCountQuintity] = useState(1);
  const [countHeart, setCountHeart] = useState(1);

  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [search, setSearch] = useSearchParams();

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);


  useEffect(() => {
    showData();
  });

 
  const navigate = useNavigate();
  function goToAboutUs() {
    navigate("/about");
  }

  return (
    <>
      <div className="details-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="product-icons">
                <div className="icon-det">
                  <CiTwitter />
                  <IoLogoInstagram />
                  <FiFacebook />
                </div>
               
      </div>
    </>
  );
};

export default Details;
