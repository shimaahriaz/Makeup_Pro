import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from "react";
import Slider from "@mui/material/Slider";
import Pagination from "react-js-pagination";
import { FaShoppingBasket } from "react-icons/fa";
import { AiTwotoneHeart } from "react-icons/ai";
import images from '../../../images/images.jpeg';
import "./Shop.css";

const Shop = () => {
  
  return (
    <>
      <div className="-shop">
        <h1>Shop Now</h1>
        <div className="circle--shop">
          <span className="brown shop-h1"></span>
          <span className="red shop-h1"></span>
          <span className="green shop-h1"></span>
        </div>
      </div>
     
    </>
  );
};

export default Shop;
