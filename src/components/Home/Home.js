import React, { useEffect, useState } from 'react';
import PopularCourses from '../PopularCourses/PopularCourses';
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
        <div className='text-white d-flex px-lg-2 px-sm-2 px-md-2 px-2'>
            <div className='d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-center justify-content-center'>
                <div className='w-100 banner-title'>
                    <p className='fs-4'>Start learning today and change your future!</p>
                    <h1 className='display-1 fw-bold'>On-Demand IT Training</h1>
                    <p className='fs-4'>David Bombal Provides a variety of training materials</p>
                </div>
                <div className='ms-auto w-100 banner-img'>
                    <img className='img-fluid w-md-100' src="https://davidbombal.com/wp-content/themes/davidbombal/assets/images/baners_right.png" alt="" />
                </div>
            </div>
        </div>
        <div className='text-white text-center'>
                <h1 className='display-4 fw-bold'>Popular Course</h1>
                <p className='p-3 fs-5 mx-auto'>Not sure what technologies to focus on?. Our content library contains a variety of training material and videos on the most in-demand topics like Cisco, Network Automation, Python, GNS3, Linux and more, we have the tools that you need to achieve your training goals.</p>
        </div>
        <div className='container row d-flex mx-auto'>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4 mb-5 mx-auto">
                    {
                        courses.map( course => <PopularCourses key={course.id} course={course}></PopularCourses> )
                    }
            </div>
        </div>

        </>
    );
};

export default Home;