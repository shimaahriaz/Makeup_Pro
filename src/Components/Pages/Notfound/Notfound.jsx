import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../../images/404-error.jpg';
import './Notfound.css';

const Notfound = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className="notfound">
            <div className="container text-center">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 text-lg-end">
                        <h1 className="mb-4">Oops! Page Not Found</h1>
                        <p className="mb-5">Sorry, the page you're looking for doesn't exist.</p>
                        <button className="btn btn-primary" onClick={goToHome}>
                            Go Back Home
                        </button>
                    </div>
                    <div className="col-lg-6 text-lg-start">
                        <img src={img} alt="404 Error" className="img-fluid notfound-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notfound;
