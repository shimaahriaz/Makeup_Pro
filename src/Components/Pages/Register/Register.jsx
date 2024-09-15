import  axios  from 'axios';
import Joi from 'joi';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { PiPasswordBold } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    password: "",
  });

