import React, { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('./fakeData2.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    console.log(courses);
    return (
        <>
        <div className='container'>
            <h1 className='text-white text-center fw-bold p-2'>Our Courses</h1>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4 mb-5 mt-2">
                    {
                        courses.map( course => <SingleCourse key={course.id} course={course}></SingleCourse> )
                    }
            </div>
        </div>
        </>
    );
};

export default Courses;