import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-light self-navbar d-flex justify-content-end align-items-center self-nav">
                <div className="container w-50 ms-0 ps-3">
                    <Link to='/home'>
                        <img src={logo} alt="" width="111" height="92"/>
                    </Link>
                </div>
                <button className="navbar-toggler navbar-toggler-right bg-light me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="container-fluid d-flex">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto pe-lg-5 mb-2 mb-lg-0 fw-bold fs-5">
                            <li className="nav-item">
                                <Link className="nav-link active text-white
                                link-hover" aria-current="page" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white link-hover" aria-current="page" to='/about'>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white link-hover" aria-current="page" to='/courses'>Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white
                                link-hover" aria-current="page" to='/contact'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div> 
    );
};

export default Header;