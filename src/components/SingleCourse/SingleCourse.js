import React from 'react';
import './SingleCourse.css'
const SingleCourse = (props) => {
    const{title, price, thumb} = props.course;
    // console.log(props.course);
    return (
        <>
        <div className="col">
        <div className="card h-100">
            <img src={thumb} className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-primary fw-bold">{title}</h5>
            </div>
            <div className="d-flex align-items-center">
                <span><p className="card-text text-primary fs-5 fw-bold p-2">${price}</p></span>
                <span className='ms-auto me-2'>
                    <button className="btn btn-primary fw-bold py-0">Enroll Now</button>
                </span>
            </div>
        </div>
        </div>
        </>
    );
};

export default SingleCourse;