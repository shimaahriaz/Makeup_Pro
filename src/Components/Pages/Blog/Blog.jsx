import React from 'react';
import axios from 'axios';
import {PiPlayLight} from 'react-icons/pi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import img from '../../../images/beautiful.jpg';
import imagOil from '../../../images/make-up-beauty-products.jpg';
import imgSkin from '../../../images/top-view-tropical.jpg';
import imgSkine from '../../../images/nail-polish.jpg';
import video1 from '../../../images/video1.mp4';
import video2 from '../../../images/video2.mp4';
import video3 from '../../../images/video3.mp4';
import './Blog.css';

const Blog = (props) => {
  console.log(props)
	

  
    return (
      <>
        <div className="bgBlog">
          <div className="container">
            <div className="blog">
              <div className="head-blog">
             
                <h1>WE PROVIDE QUILTY</h1>
                <p className="line-blog"></p>
                <p className="text-center">See Our Project</p>
              </div>
            </div>

            <div className="row row_blog justify-content-center align-items-center">
              <div className="col-lg-4">
                <div className="video-blog">
                  <video autoPlay muted loop>
                    <source
                      src= {video1}
                      type="video/mp4"
                    />
                    
                    Your browser does not support the video tag.
                    <PiPlayLight className="icon-blog" />
                  </video>
                  <div className="phead-blog">
                    <p className="line-blog"></p>
                    <p className="">Qoulty Product</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="video-blog">
                  <video autoPlay muted loop>
                    <source
                      src= {video2}
                      type="video/mp4"
                    />
                    
                    Your browser does not support the video tag.
                    <PiPlayLight className="icon-blog" />
                  </video>
                  <div className="phead-blog">
                    <p className="line-blog"></p>
                    <p className="">Qoulty Product</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="video-blog">
                  <video autoPlay muted loop>
                    <source
                      src= {video3}
                      type="video/mp4"
                    />
                    
                    Your browser does not support the video tag.
                    <PiPlayLight className="icon-blog" />
                  </video>
                  <div className="phead-blog">
                    <p className="line-blog"></p>
                    <p className="">Qoulty Product</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        
          
        
        
      </>
    );
}



export default Blog;