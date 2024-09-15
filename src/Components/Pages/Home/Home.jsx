import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaShoppingBasket } from "react-icons/fa";
import { AiTwotoneHeart } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import {HiOutlineShoppingCart} from 'react-icons/hi';
import {BsChatHeart} from 'react-icons/bs';
import {CiBadgeDollar} from 'react-icons/ci';
import imag2 from "../../../images/elegant-skin-care.jpg";
import img3 from "./img2.jpg";
import imag3 from "../../../images/natural-handmade-soap.jpg";
import imag from "../../../images/beautiful-still-life-with-herbal-medicine.jpg";
import img4 from "../../../images/arrangement-skin.jpg";
import img1 from "../../../images/eucalyptus-background.jpg";
import img5 from "../../../images/top-view-argan-oil-arrangement_23-2148955845.jpg";
import img6 from "../../../images/img6.jpg";
import img7 from "../../../images/flat-lay-arrangement-argan-oil-care-product.jpg";
import img13 from "../../../images/img13.jpg";
import img14 from "../../../images/img14.jpg";
import img15 from "../../../images/img15.jpg";
import img16 from "../../../images/img16.jpg";
import img17 from "../../../images/img17.jpg";
import img18 from "../../../images/img22.jpg";
import img19 from "../../../images/img19.jpg";
import img20 from "../../../images/img20.jpg";
import "./Home.css";


const Home = (props) => {
  const [products, setProducts] = useState([]);
  const productList = products.slice(90, 98);
  const navigate = useNavigate();
  const [arrayItems, setArrayItaems] = useState([
    {
      image: img3,
      h1: "The new linehup you well swear by for dullness, drayness and breakouts",
      p: "Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.",
      a: "See more",
    },
    {
      image: imag2,
      h1: "The new linehup you well swear by for dullness, drayness and breakouts",
      p: "Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.",
      a: "See more",
    },
    {
      image: img6,
      h1: "The new linehup you well swear by for dullness, drayness and breakouts",
      p: "Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.",
      a: "See more",
    },
  ]);

  const [makeup, setMakuep]= useState([
    {img: img13},
    {img: img14},
    {img: img15},
    {img: img16},
    {img: img17},
    {img: img18},
    {img: img19},
    {img: img20},
  ])

  async function showData() {
    try {
      let result = await axios.get("newProducts.json");
      setProducts(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    showData();
  }, []);


  function goToShop() {
    navigate("/shop");
  }

  function goToBlog() {
    navigate("/blog");
  }

  function goToDetails(id){
    navigate(`/details?id=${id}`)
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);


  return (
    <>
      <Carousel>
        {arrayItems.map((item, index) => (
          <Carousel.Item key={index} className="">
            <div
              className="cover"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
            >
              <div className="container items-items d-flex align-items-center h-100">
                <div className="w-50 text-home">
                  <h1>{item.h1}</h1>
                  <p className="text-black-50">{item.p}</p>
                  <div className="fw-bold mt-4">
                    <button onClick={goToShop} className="btn btnHome">
                      {item.a}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

     
    </>
  );
};

export default Home;
