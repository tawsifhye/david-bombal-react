import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMailBulk, faSearchLocation} from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faFacebook, faTwitter, faLinkedin, faPinterest} from '@fortawesome/free-brands-svg-icons';
import './Contact.css'
const Contact = () => {
    const mailIcon = <FontAwesomeIcon icon={faMailBulk} />
    const locationIcon = <FontAwesomeIcon icon={faSearchLocation} />
    const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
    const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />
    const pinteresIcon = <FontAwesomeIcon icon={faPinterest} />
    return (
        <>
         <div className='text-white contact-banner text-center '>
                <div className="">
                    <h1 className='display-3 fw-bold'>Contact Us</h1>
                    <p className='fw-bold'>Get in touch with us!</p>
                </div>
            </div>
            <div className=" row  align-items-center bg-white py-4">
                <div className='row col-lg-6 col-md-6 col-sm-12  justify-content-center text-center mx-auto'>
                    <h1 className='display-2'>{mailIcon}</h1>
                    <h1 className='display-5'>EMAIL</h1>
                    <p>support@davidbombal.com</p>
                </div>
                <div div className='row col-lg-6 col-md-6 col-sm-12  justify-content-center text-center mx-auto'>
                    <h1 className='display-2'>{locationIcon}</h1>
                    <h1 className='display-5'>LOCATION</h1>
                    <p>Minton Place Victoria Road Bicester, Oxfordshire, OX26 6QB United Kingdom</p>
                </div>
            </div>
            <div className='bg-white p-2'>
                <h1 className='fw-bold text-center'>Our Social Platforms</h1>
                <div className='bg-white col-lg-6 d-flex justify-content-evenly
 mx-auto p-2'>
                    <span className='text-danger'><h1>{youtubeIcon}</h1></span>
                    <span className='text-danger'><h1>{facebookIcon}</h1></span>
                    <span className='text-danger'><h1>{twitterIcon}</h1></span>
                    <span className='text-danger'><h1>{linkedinIcon}</h1></span>
                    <span className='text-danger'><h1>{pinteresIcon}</h1></span>
                </div>
            </div>
            <div className='bg-white p-2'>
                <div className="mb-3 col-lg-8 col-sm-6 mx-auto">
                    <label for="exampleFormControlInput1" className="form-label fw-bold">Name</label>
                    <input type="text" className="form-control border border-dark" id="exampleFormControlInput1" placeholder="Yout name here"/>
                </div>
                <div className="mb-3 col-lg-8 col-sm-6 mx-auto">
                    <label for="exampleFormControlInput1" className="form-label fw-bold">Email address</label>
                    <input type="email" className="form-control border border-dark" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3 col-lg-8 col-sm-6 mx-auto">
                    <label for="exampleFormControlTextarea1" className="form-label fw-bold">Message</label>
                    <textarea className="form-control border border-dark" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="mb-3 col-lg-8 mx-auto">
                    <button className='btn btn-primary fw-bold'>Submit</button>
                </div>
            </div>
        </>
    );
};

export default Contact;