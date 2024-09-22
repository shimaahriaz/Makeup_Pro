import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Joi from 'joi';
import { PiPasswordBold } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import "./Login.css";

const Login = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: "", password: "" });
    const [errorMsg, setErrorMsg] = useState("");
    const [errorValidation, setErrorValidation] = useState([]);
    const [loading, setLoading] = useState(false);

    function getUserData(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    function goLogIn() {
        navigate("/home");
    }

    function validateForm() {
        const schema = Joi.object({
            email: Joi.string().email({ tlds: { allow: ["com", "net"] } }).required(),
            password: Joi.string().alphanum().required(),
        });
        return schema.validate(user, { abortEarly: false });
    }

    async function submitFormData(e) {
        e.preventDefault();
        setLoading(true);

        const validationErrorResponse = validateForm();
        if (validationErrorResponse.error) {
            setErrorValidation(validationErrorResponse.error.details);
        } else {
            try {
                const { data } = await axios.post("https://route-movies-api.vercel.app/signin", user);
                if (data.message === "success") {
                    localStorage.setItem("userToken", data.token);
                    props.informUserData();
                    goLogIn();
                } else {
                    setErrorMsg(data.message);
                }
            } catch (error) {
                setErrorMsg("An error occurred. Please try again.");
            }
        }
        setLoading(false);
    }

    return (
        <div className="form-contact">
            <div className="container">
                <h1 className="h-contact">Login</h1>
                <form onSubmit={submitFormData} className="form-floating">
                    {errorValidation.map((error, index) => (
                        <div key={index} className="alert alert-danger">{error.message}</div>
                    ))}
                    <div className="mb-2 input-group">
                        <span className="input-reglogin">
                            <TfiEmail className="icon-contact fs-5 fw-bold" />
                        </span>
                        <input
                            onChange={getUserData}
                            type="email"
                            className="form-control form-registerlogin"
                            placeholder="Email address"
                            name="email"
                        />
                    </div>
                    <div className="form-text text-danger">
                        {errorMsg === "email doesn't exist" ? errorMsg : ""}
                    </div>
                    <div className="mb-2 input-group">
                        <span className="input-reglogin">
                            <PiPasswordBold className="icon-contact" />
                        </span>
                        <input
                            onChange={getUserData}
                            type="password"
                            className="form-control form-registerlogin"
                            placeholder="Password"
                            name="password"
                        />
                    </div>
                    <div className="form-text text-danger">
                        {errorMsg === "incorrect password" ? errorMsg : ""}
                    </div>
                    <button type="submit" className="btn btn-primary float-end">
                        {loading ? <i className="fa fa-spinner fa-spin text-warning fs-5"></i> : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
