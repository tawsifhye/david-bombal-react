import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className=''>
            <div className='text-white about-banner text-center '>
                <div className="">
                    <h1 className='display-3 fw-bold'>OUR MISSION</h1>
                    <p className='fw-bold'>Change your life through affordable training and education.</p>
                </div>
            </div>
            <div className=' contrainer  bg-white p-3 text-center'>
                <div className='container col-sm-12 col-lg-8 col-md-12 mx-auto'>
                    <h1 className='display-4 fw-bold'>Ready to become a better network engineer?</h1>
                    <p>
                        You'll find free tutorials and premium courses that teach you new skills. If you’re an absolute beginner – perfect! We’ve got courses aimed at getting you off the ground. Looking for more advanced skills? Great! We’ve got tutorials and courses that take you to the next level.
                    </p>
                </div>
                <div className='container col-sm-12 col-lg-8 col-md-12 mx-auto'>
                    <h1>About Me</h1>
                    <h2 className='fw-light'>CCIE # 11023 (Emeritus), over 15 years of network training experience
                    </h2>
                    <img src="https://davidbombal.com/wp-content/themes/davidbombal/images/David-Bombal.png" alt="" />
                    <p className='font-poppins'>
                    David Bombal (CCIE #11023 Emeritus) passed his Cisco Certified Internetwork Expert Routing and Switching exam in January 2003 and is one of a small percentage of Cisco Engineers that pass their CCIE labs on their first attempt.
                    </p>
                    <p>
                        David qualified as a Cisco Certified Systems Instructor (CCSI #22787) many years ago! He has been training Cisco courses for over 15 years and has delivered instructor led courses in various countries around the world covering a wide range of Cisco topics from CCNA to CCIE.
                    </p>
                    <p>
                        He has also personally developed Cisco engineer utilities such as the VPN Config Generator, software, training materials, EBooks, videos and other products which are used throughout the world.
                    </p>
                    <p>
                        David has designed, implemented and managed networks ranging from single sites to those that span 50 countries
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;