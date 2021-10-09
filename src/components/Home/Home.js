import React, { useEffect, useState } from 'react';
import PopularCourses from '../PopularCourses/PopularCourses';
import CountUp from 'react-countup';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('./fakeData1.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    // console.log(courses);
    return (
        <>
        <div className='text-white container-fluid'>
            <div className='d-flex flex-lg-row flex-md-row flex-sm-column flex-xs-column align-items-center justify-items-center justify-content-cente'>
                <div className='me-auto ps-5 ps-sm-0 w-100 banner-title'>
                    <p className='fs-4'>Start learning today and change your future!</p>
                    <h1 className='display-1 fw-bold'>On-Demand IT Training</h1>
                    <p className='fs-4'>David Bombal Provides a variety of training materials</p>
                </div>
                <div className='ms-auto pe-sm-0 pe-5 w-100 banner-img'>
                    <img className='img-fluid' src="https://davidbombal.com/wp-content/themes/davidbombal/assets/images/baners_right.png" alt="" />
                </div>
            </div>
        </div>
        <div className='text-white text-center'>
                <h1 className='display-4 fw-bold'>Popular Course</h1>
                <p className='p-3 fs-5 mx-auto'>Not sure what technologies to focus on?. Our content library contains a variety of training material and videos on the most in-demand topics like Cisco, Network Automation, Python, GNS3, Linux and more, we have the tools that you need to achieve your training goals.</p>
        </div>
        <div className='container'>
            <div className="row row-cols-xs-1 row-cols-md-2 row-cols-lg-2 g-4 mb-5">
                    {
                        courses.map( course => <PopularCourses key={course.id} course={course}></PopularCourses> )
                    }
            </div>
        </div>

        </>
    );
};

export default Home;